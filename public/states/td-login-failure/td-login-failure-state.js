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
            tdCoreRouterProvider.define('td-login-failure', {
                url: '/loginfailure',
                templateUrl: 'states/td-login-failure/td-login-failure.tpl.html',
                //data: {
                //    navigation: {
                //        label: "Login Failure"
                //    }
                //}
                // see ui-router's stateConfig documentation for other parameters you can configure here
            });
        });
}());
