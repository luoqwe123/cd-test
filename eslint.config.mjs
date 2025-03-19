import globals from "globals";
import pluginJs from "@eslint/js";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  {
    files: ["**/*.js"],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    rules: {
      indent: ["error", 2], // 缩进 2 个空格
      semi: ["error", "always"], // 强制分号
      "no-console": "off", // 允许 .js 文件中使用 console
      "no-require": "off", 
    },
  },
];