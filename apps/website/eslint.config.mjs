import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { FlatCompat } from "@eslint/eslintrc";
import base from "@email-suite/config/eslint/base";

const compat = new FlatCompat({
  baseDirectory: dirname(fileURLToPath(import.meta.url))
});

const eslintConfig = [...base, ...compat.extends("next/core-web-vitals")];

export default eslintConfig;
