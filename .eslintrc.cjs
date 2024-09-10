module.exports = {
	env: {
		browser: true,
		es6: true
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: './tsconfig.json',
		sourceType: 'module',
		ecmaVersion: 'latest'
	},
	plugins: ['@typescript-eslint', 'jest', 'react-refresh'],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:jest/recommended',
		'plugin:react-hooks/recommended',
		'prettier'
	],
	overrides: [
		{
			files: ['*.{js,cjs,mjs,ts,mts,jsx,tsx}']
		}
	],
	rules: {
		'no-unused-vars': 'warn',
		'@typescript-eslint/explicit-function-return-type': 'warn',
		'react-refresh/only-export-components': [
			'warn',
			{ allowConstantExport: true }
		]
	}
};
