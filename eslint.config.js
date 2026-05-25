import { fileURLToPath } from "node:url";
import { dirname } from "node:path";
import js from "@eslint/js";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import jestPlugin from "eslint-plugin-jest";
import prettierConfig from "eslint-config-prettier";

const __dirname = dirname(fileURLToPath(import.meta.url));

// globals.browser has a known entry with trailing whitespace — sanitize it
const browserGlobals = Object.fromEntries(
	Object.entries(globals.browser).map(([k, v]) => [k.trim(), v]),
);

const tsRules = {
	"@typescript-eslint/no-explicit-any": "off",
	"@typescript-eslint/explicit-module-boundary-types": "off",
	"@typescript-eslint/no-inferrable-types": "off",
	"@typescript-eslint/no-non-null-assertion": "off",
	"@typescript-eslint/no-empty-interface": "off",
	"@typescript-eslint/no-namespace": "off",
	"@typescript-eslint/no-empty-function": "off",
	"@typescript-eslint/no-this-alias": "off",
	"@typescript-eslint/ban-types": "off",
	"@typescript-eslint/ban-ts-comment": "off",
	"prefer-spread": "off",
	"no-case-declarations": "off",
	"no-console": "off",
	"@typescript-eslint/no-unused-vars": ["warn"],
	"@typescript-eslint/consistent-type-imports": "warn",
	"@typescript-eslint/no-unnecessary-condition": "warn",
	"react-refresh/only-export-components": [
		"warn",
		{ allowConstantExport: true },
	],
};

export default [
	{
		ignores: [
			"build/",
			"dist/",
			"tsconfig.tsbuildinfo",
			"tsdoc-metadata.json",
			".pnp",
			".pnp.js",
			".yarn/",
			"node_modules/",
			"bower_components/",
			"jspm_packages/",
			"*.local",
			".rollup.cache/",
			".cache/",
			".netlify/",
			"backups/",
			"tmp/",
		],
	},
	js.configs.recommended,
	// Node.js scripts and config files
	{
		files: ["**/*.{cjs,mjs}", "scripts/**/*.js"],
		languageOptions: {
			globals: { ...globals.node },
		},
	},
	// TypeScript source and e2e files
	{
		files: ["src/**/*.{ts,tsx}", "e2e/**/*.ts"],
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				project: "./tsconfig.json",
				tsconfigRootDir: __dirname,
				ecmaVersion: "latest",
				sourceType: "module",
				ecmaFeatures: { jsx: true },
			},
			globals: {
				...browserGlobals,
				...globals.es2020,
				...globals.node,
			},
		},
		plugins: {
			"@typescript-eslint": tsPlugin,
			"react-hooks": reactHooks,
			"react-refresh": reactRefresh,
		},
		rules: {
			...(tsPlugin.configs.recommended.rules ?? {}),
			...(reactHooks.configs.recommended.rules ?? {}),
			...tsRules,
		},
	},
	// Test files (bun:test)
	{
		files: ["tests/**/*.ts"],
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				project: "./tests/tsconfig.json",
				tsconfigRootDir: __dirname,
				ecmaVersion: "latest",
				sourceType: "module",
			},
			globals: { ...globals.node },
		},
		plugins: {
			"@typescript-eslint": tsPlugin,
			jest: jestPlugin,
		},
		rules: {
			...(tsPlugin.configs.recommended.rules ?? {}),
			...(jestPlugin.configs.recommended.rules ?? {}),
			"@typescript-eslint/no-unused-vars": ["warn"],
		},
	},
	prettierConfig,
];
