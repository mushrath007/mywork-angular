/**
 * Define a root state for this App.
 *
 * Every App must declare a root state.
 */
;(function() {

  'use strict';

  angular.module('com.td.oca.examplePersonal')
  .config(['tdCoreRouterProvider', function (tdCoreRouterProvider) {
    tdCoreRouterProvider.define('td-example-personal', {
      url: '/td-example-personal',
      templateUrl: 'states/td-example-personal/td-example-personal.tpl.html',
      data: {
        navigation: {
          label: "Login"
        }
      }
      // see ui-router's stateConfig documentation for other parameters you can configure here 
    });
  }]);

}());
