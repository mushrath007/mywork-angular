/**
 * @ngdoc service
 *
 * @name com.td.oca.examplePersonal.service:tdExampleFormatter
 * @description This is a sample angular service.
 */
angular.module('com.td.oca.examplePersonal').factory('tdExampleFormatter', function () {

  'use strict';

  return {

    /**
     * @ngdoc function
     * @name com.td.oca.examplePersonal.service:capitalize#tdExampleFormatter
     * @methodOf com.td.oca.examplePersonal.service:tdExampleFormatter
     * @param {String} msg The message to capitalize.
     * @returns {String} The message.
     */
    capitalize: function (msg) {
      return msg.charAt(0).toUpperCase() + msg.slice(1).toLowerCase();
    }
  };

});
