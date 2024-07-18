import js from "@eslint/js";
import golbals from 'globals'
import markdown from 'eslint-plugin-markdown'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'

export default [
  {
    languageOptions: {
      globals: {
        ...golbals.browser
      }
    }
  },
  {
    ignores: ["dist/*"]
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "vue/multi-word-component-names": "off",
      // "vue/max-attributes-per-line": ["error", {
      //   "singleline": {
      //     "max": 1
      //   },      
      //   "multiline": {
      //     "max": 1
      //   }
      // }],
      "vue/singleline-html-element-content-newline": "off",
      "vue/max-attributes-per-line": "off"
    }
  },
  {
    files: ["**/*.md"],
    plugins: {
      markdown
    },
    processor: "markdown/markdown"
  },
  {
    files: ['**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: {
          js: 'espree',
          jsx: 'espree',
          mjs: 'espree',
          ts: tseslint.parser,
          tsx: tseslint.parser,
          mts: tseslint.parser,
        },
        extraFileExtensions: ['.vue'],
        ecmaFeatures: {
          jsx: true
        }
      }
    }
  }
];