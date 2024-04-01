module.exports = {
	extends: ['next/core-web-vitals', 'plugin:prettier/recommended'],

	plugins: ['prettier'],

	rules: {
		'prettier/prettier': 'error',
		'linebreak-style': [
			'error',
			process.platform === 'win32' ? 'windows' : 'unix',
		],
	},
};
