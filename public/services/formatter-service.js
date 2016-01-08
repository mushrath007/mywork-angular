/**
 * @ngdoc service
 *
 * @name com.td.oca.examplePersonal.service:tdExampleFormatter
 * @description This is a sample angular service.
 */
angular.module('com.td.oca.examplePersonal')
    .factory('tdExampleFormatter', function () {

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

      })
    .factory('instagram',function($resource){

      'use strict';

        return{
            fetchPopular: function(callback){

            // The ngResource module gives us the $resource service. It makes working with
            // AJAX easy. Here I am using the client_id of a test app. Replace it with yours.

            var api = $resource('https://api.instagram.com/v1/media/popular?client_id=:client_id&callback=JSON_CALLBACK',{
              client_id: '642176ece1e7445e99244cec26f4de1f'
            },{
              // This creates an action which we've chosen to name "fetch". It issues
              // an JSONP request to the URL of the resource. JSONP requires that the
              // callback=JSON_CALLBACK part is added to the URL.

              fetch:{method:'JSONP'}
            });

            api.fetch(function(response){

              // Call the supplied callback function
              callback(response.data);

            });
          }
        }
    })

    .factory('AngularApiResource',['$resource',function($resource){

        return $resource('/v1/AngularApi/data/sample1/:id',
            {id: '@id'},
            { 'query':
                {
                    method: 'GET',
                    isArray: false
                }
            });
    }]);
