/**
 * The td-he-menu state
 *
 * It displays the expand and collapse of HE
 *
 */
;(function() {

    'use strict';

    angular.module('com.td.oca.stockProduct')
        .config(function (tdCoreRouterProvider) {
            tdCoreRouterProvider.define('td-he-menu', {
                url: '/',
                templateUrl: 'states/td-he-menu/td-he-menu.tpl.html',
                controller: "CollapseDemoCtrl",
                data: {
                    navigation: {
                        label: "Home Equity"
                    }
                }
                // see ui-router's stateConfig documentation for other parameters you can configure here
            });
        });
}());