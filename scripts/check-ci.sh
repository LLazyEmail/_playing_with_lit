#!/usr/bin/env bash
# Fail early the same way CI does: lockfile sync, lint, typecheck/build, tests.
# Usage: npm run preflight   OR   bash scripts/check-ci.sh
set -euo pipefail
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

echo "==> npm ci (package.json must match package-lock.json)"
npm ci

echo "==> lint"
npm run lint

echo "==> build (tsc)"
npm run build

echo "==> test"
npm test

echo "OK: preflight passed (matches CI Lint / Build & typecheck / Unit & snapshot tests)."
