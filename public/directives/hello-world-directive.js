/**
 * @ngdoc directive
 * @name com.td.oca.examplePersonal.directive:tdHelloWorld
 * @element div
 *
 * @param {String} tdHelloWorldMsg message to display
 * @description A sample directive that shows a localized message.
 *
 * @example
 * <pre>
 *   <div data-td-hello-world data-td-hello-world-msg="'Greetings!'"></div>
 * </pre>
 */
angular.module('com.td.oca.examplePersonal').directive('tdExampleHelloWorld',['tdExampleFormatter', '$filter',function (tdAnita1Formatter, $filter) {

  'use strict';

  return {

    templateUrl: 'tpl/hello-world.tpl.html',

    replace: true,

    scope: {
      msg: '@tdHelloWorldMsg'
    },

    link: function (scope) {

      scope.msg2 = tdAnita1Formatter.capitalize($filter('translate')('GET_CODING'));

    }

  };
}]);


