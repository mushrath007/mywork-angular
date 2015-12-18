/**
 * @ngdoc directive
 * @name com.td.oca.examplePersonal.directive:tdHelloData
 * @element div
 *
 * @description A sample directive that uses the Service API to call the Channel API.
 *
 * @example
 * <pre>
 *   <div data-td-example-hello-data></div>
 * </pre>
 */
angular.module('com.td.oca.examplePersonal').directive('tdExampleHelloData',
  ['tdCoreResource', function (tdCoreResource) {

    'use strict';

    return {

      templateUrl: 'tpl/hello-data.tpl.html',

      replace: true,

      link: function (scope) {
        var Product = tdCoreResource('/v1/products/:id');
        var product = Product.get({id:'A7224FEF-5F39-4B08-9F3F-053241E65652'});
        scope.product = product;
      }

    };
  }]);
