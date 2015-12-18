'use strict';

//sets the base path in case an action changes the cwd
var path = require('path');
var baseFilePath = path.dirname(__filename);
var reportFilePath = path.join(baseFilePath,'/reports');

module.exports = function (config) {

	config.set({
		// base path, that will be used to resolve files and exclude
		basePath: '',

		frameworks: ['jasmine'],

		// list of files to exclude
		exclude: [],

		preprocessors: {
			'public/**/*.tpl.html': ['ng-html2js'],
			'dist/**/*.js': ['coverage'],
			'public/states/**/*.js': ['coverage'],
			'public/services/**/*.js': ['coverage'],
			'public/directives/**/*.js': ['coverage'],
			'public/app.js': ['coverage']
		},

		ngHtml2JsPreprocessor: {
			moduleName: 'com.td.oca.examplePersonal',
			stripPrefix: 'public/'
		},

		// use dots reporter, as travis terminal does not support escaping sequences
		// possible values: 'dots', 'progress'
		// CLI --reporters progress
		reporters: ['spec', 'junit', 'coverage'],

		junitReporter: {
			// will be resolved to basePath (in the same way as files/exclude patterns)
			outputFile: path.join(reportFilePath,'tests.xml')
		},

		coverageReporter: {
			dir: path.join(reportFilePath,'coverage/'),
			reporters: [
				// reporters not supporting the `file` property
				{ type: 'lcov', subdir: '.', file: 'coverage.info'},
				{ type: 'json', subdir: '.', file: 'coverage.json'},
				{ type: 'cobertura', subdir: '.', file: 'cobertura.xml'},
				{ type: 'text'}
			]
		},

		// web server port
		// CLI --port 9876
		port: 9876,

		// enable / disable colors in the output (reporters and logs)
		// CLI --colors --no-colors
		colors: true,

		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		// CLI --log-level debug
		logLevel: config.LOG_INFO,

		// enable / disable watching file and executing tests whenever any file changes
		// CLI --auto-watch --no-auto-watch
		autoWatch: false,

		// Start these browsers, currently available:
		// - Chrome
		// - ChromeCanary
		// - Firefox
		// - Opera
		// - Safari (only Mac)
		// - PhantomJS
		// - IE (only Windows)
		// CLI --browsers Chrome,Firefox,Safari
		browsers: ['PhantomJS'],

		// If browser does not capture in given timeout [ms], kill it
		// CLI --capture-timeout 5000
		captureTimeout: 20000,

		// Auto run tests on start (when browsers are captured) and exit
		// CLI --single-run --no-single-run
		singleRun: true,

		// report which specs are slower than 500ms
		// CLI --report-slower-than 500
		reportSlowerThan: 500,

		plugins: [
			'karma-jasmine',
			'karma-phantomjs-launcher',
			'karma-chrome-launcher',
			'karma-firefox-launcher',
			'karma-junit-reporter',
			'karma-coverage',
			'karma-ng-html2js-preprocessor',
			'karma-spec-reporter'
		]
	});
};
