/**
 * The td-he-menu state
 *
 * It displays the expand and collapse of HE
 *
 */
;(function() {

    'use strict';

    angular.module('com.td.oca.examplePersonal')
        .config(function (tdCoreRouterProvider) {
            tdCoreRouterProvider.define('td-login-success', {
                url: '/loginsuccess',
                templateUrl: 'states/td-login-success/td-login-success.tpl.html'
                // see ui-router's stateConfig documentation for other parameters you can configure here
            });
        });
}());
