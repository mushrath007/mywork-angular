angular.module('com.td.oca.examplePersonal').config(['$translateProvider', function($translateProvider) {

  'use strict';

  $translateProvider.translations('fr_CA', {

    'WELCOME_MSG': 'Bonjour {{msg}}',

    'GET_CODING': 'let\'s get coding!(fr)'

  });

}]);