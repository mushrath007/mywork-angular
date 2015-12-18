'use strict';

var common = require('./karma-common.conf.js');

module.exports = function(config) {
  common(config);
  config.set({
    // list of files / patterns to load in the browser
    files: [
      // populated by wiredep
      // bower:js
      'public/bower_components/jquery/dist/jquery.js',
      'public/bower_components/angular/angular.js',
      'public/bower_components/td-core-angular-aria/td-core-angular-aria.js',
      'public/bower_components/angular-cookie/angular-cookie.js',
      'public/bower_components/angular-translate/angular-translate.js',
      'public/bower_components/td-core-i18n/td-core-i18n.js',
      'public/bower_components/angular-resource/angular-resource.js',
      'public/bower_components/td-core-resource/td-core-resource.js',
      'public/bower_components/angular-ui-router/release/angular-ui-router.js',
      'public/bower_components/td-core-config-app/td-core-config-app.js',
      'public/bower_components/td-core-uri-utilities/td-core-uri-utilities.js',
      'public/bower_components/td-core-route-change-listener/td-core-route-change-listener.js',
      'public/bower_components/td-core-router/td-core-router.js',
      'public/bower_components/angular-translate-loader-static-files/angular-translate-loader-static-files.js',
      'public/bower_components/angular-validation-ghiscoding/locales/validation/en.js',
      'public/bower_components/angular-validation-ghiscoding/locales/validation/fr.js',
      'public/bower_components/angular-validation-ghiscoding/dist/angular-validation.min.js',
      'public/bower_components/angular-validation-ghiscoding/src/validation-directive.js',
      'public/bower_components/angular-validation-ghiscoding/src/validation-common.js',
      'public/bower_components/angular-validation-ghiscoding/src/validation-rules.js',
      'public/bower_components/angular-validation-ghiscoding/src/validation-service.js',
      'public/bower_components/td-alert-browse-happy/td-alert-browse-happy.js',
      'public/bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
      'public/bower_components/angular-animate/angular-animate.js',
      'public/bower_components/angular-recursion/angular-recursion.js',
      'public/bower_components/angular-sanitize/angular-sanitize.js',
      'public/bower_components/mobile-detect/mobile-detect.js',
      'public/bower_components/td-core-device-info-app/td-core-device-info-app.js',
      'public/bower_components/td-core-container/td-core-container.js',
      'public/bower_components/td-ui-responsive-app/td-ui-responsive-app.js',
      'public/bower_components/td-ui-navigation/td-ui-navigation.js',
      'public/bower_components/angular-mocks/angular-mocks.js',
      // endbower
      'public/app.js',
      'public/states/**/*.js',
      'public/services/*.js',
      'public/directives/*.js',
      'public/i18n/*.js',
      'public/**/*.tpl.html',
      'test/**/*.js'
    ]
  });
};
