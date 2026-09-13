#!/usr/bin/env python3
"""Post an AI review comment on the current pull request."""

from __future__ import annotations

import os
import sys

import requests

REVIEW_PROMPT = """You are an AI code reviewer. Your task is to analyze the following code diff from a GitHub pull request. Provide feedback in plain text with these rules:
- Identify potential bugs, security issues, or inefficiencies.
- Suggest improvements in readability, maintainability, or performance.
- Keep feedback concise and actionable (bullet points preferred).
- Do not rewrite the entire code; only highlight issues and improvements.

Code diff:
"""

MAX_DIFF_CHARS = 80_000
GITHUB_API = "https://api.github.com"
XAI_API = "https://api.x.ai/v1/chat/completions"


def fail(message: str) -> None:
    print(message, file=sys.stderr)
    sys.exit(1)


def required_env(name: str) -> str:
    value = os.environ.get(name, "").strip()
    if not value:
        fail(f"Missing required environment variable: {name}")
    return value


def github_headers(token: str) -> dict[str, str]:
    return {
        "Accept": "application/vnd.github+json",
        "Authorization": f"Bearer {token}",
        "X-GitHub-Api-Version": "2022-11-28",
    }


def fetch_pr_diff(owner: str, repo: str, pr_number: str, token: str) -> str:
    url = f"{GITHUB_API}/repos/{owner}/{repo}/pulls/{pr_number}"
    response = requests.get(
        url,
        headers={**github_headers(token), "Accept": "application/vnd.github.diff"},
        timeout=60,
    )
    response.raise_for_status()
    diff = response.text.strip()
    if not diff:
        return ""
    if len(diff) > MAX_DIFF_CHARS:
        return diff[:MAX_DIFF_CHARS] + "\n\n[diff truncated]"
    return diff


def review_diff(diff: str, api_key: str, model: str) -> str:
    payload = {
        "model": model,
        "temperature": 0.2,
        "messages": [
            {
                "role": "system",
                "content": "You review pull request diffs. Be concise and actionable.",
            },
            {
                "role": "user",
                "content": f"{REVIEW_PROMPT}\n{diff}",
            },
        ],
    }
    response = requests.post(
        XAI_API,
        headers={
            "Authorization": f"Bearer {api_key}",
            "Content-Type": "application/json",
        },
        json=payload,
        timeout=120,
    )
    response.raise_for_status()
    data = response.json()
    try:
        return data["choices"][0]["message"]["content"].strip()
    except (KeyError, IndexError, AttributeError, TypeError) as exc:
        fail(f"Unexpected xAI response: {data!r} ({exc})")
    return ""


def post_pr_comment(owner: str, repo: str, pr_number: str, token: str, body: str) -> None:
    url = f"{GITHUB_API}/repos/{owner}/{repo}/issues/{pr_number}/comments"
    response = requests.post(
        url,
        headers=github_headers(token),
        json={"body": body},
        timeout=60,
    )
    response.raise_for_status()


def main() -> None:
    token = required_env("GITHUB_TOKEN")
    repository = required_env("GITHUB_REPOSITORY")
    pr_number = required_env("PR_NUMBER")
    api_key = required_env("XAI_API_KEY")
    model = os.environ.get("XAI_MODEL", "grok-4-latest").strip() or "grok-4-latest"

    if "/" not in repository:
        fail(f"Invalid GITHUB_REPOSITORY: {repository}")
    owner, repo = repository.split("/", 1)

    diff = fetch_pr_diff(owner, repo, pr_number, token)
    if not diff:
        print("No diff found; skipping review.")
        return

    review = review_diff(diff, api_key, model)
    if not review:
        fail("Model returned an empty review.")

    comment = (
        "## AI Code Review\n\n"
        f"{review}\n\n"
        "---\n_Automated review from the AI Code Review workflow._"
    )
    post_pr_comment(owner, repo, pr_number, token, comment)
    print("Posted AI review comment.")


if __name__ == "__main__":
    main()
