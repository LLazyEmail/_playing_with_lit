import {
  MarkupGeneratorError,
  writeGeneratedFile,
} from 'markup-generator';

/**
 * Persist rendered HTML under `generated/` with a stable filename.
 * `generateFileName()` is not used — it appends a UUID and would break the
 * documented `hackernoon-email.html` / `nomoretogo-email.html` / `mailchimp-email.html` paths.
 */
export async function writeGeneratedEmail(options: {
  content: string;
  fileName: string;
  label: string;
}): Promise<void> {
  try {
    const outPath = await writeGeneratedFile({
      content: options.content,
      fileName: options.fileName,
      dir: 'generated',
    });
    console.log(`✅  ${options.label} → ${outPath}`);
  } catch (err) {
    if (err instanceof MarkupGeneratorError) {
      console.error(
        `❌ Failed to write ${options.fileName} [${err.code}]: ${err.message}`
      );
      process.exitCode = 1;
      return;
    }
    throw err;
  }
}
