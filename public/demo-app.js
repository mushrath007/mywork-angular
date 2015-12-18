
;(function() {

  'use strict';

  var rootModule = angular.module('com.td.oca.examplePersonalDemo', [
    'com.td.oca.examplePersonal', 
    'com.td.oca.alertBrowseHappy',
    'com.td.oca.coreI18n',
    'com.td.oca.coreRouter',
    'com.td.oca.uiNavigation'
  ]);

  rootModule.config(['$translateProvider', function ($translateProvider) {
    $translateProvider.fallbackLanguage('en_CA');
  }]);

  rootModule.config(['tdCoreRouterProvider', function (tdCoreRouterProvider) {
    tdCoreRouterProvider.register();
  }]);

}());

