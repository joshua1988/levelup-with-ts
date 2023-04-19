// ./setup/monaco.ts
import { defineMonacoSetup } from '@slidev/types'

export default defineMonacoSetup(async (monaco) => {
  monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
    allowJs: true,
    checkJs: true,
    strict: true,
  });

  return {
    theme: {
      dark: 'vs-dark',
      light: 'vs',
    },
  };
});