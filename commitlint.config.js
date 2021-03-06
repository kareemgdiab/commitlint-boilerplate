module.exports = {
	extends: ['@commitlint/config-conventional'],
	rules: {
		'subject-case': [2, 'never', ['start-case', 'pascal-case']],
		'scope-case': [2, 'always', ['upper-case', 'start-case']]
	}
}
