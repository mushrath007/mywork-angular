describe('Hello Data Directive Spec', function () {

  'use strict';

  var $rootScope,
    $compile,
    $httpBackend;

  beforeEach(function () {

    module('com.td.oca.examplePersonal');
    module('com.td.oca.coreResource');

    inject(function (_$rootScope_, _$compile_, _$locale_, _$httpBackend_) {
      $rootScope = _$rootScope_;
      $compile = _$compile_;
      _$locale_.setLocale('en_CA');
      $httpBackend = _$httpBackend_;

      $httpBackend.whenGET('/v1/products/A7224FEF-5F39-4B08-9F3F-053241E65652').respond(
        {
          "product": {
            "id": "A7224FEF-5F39-4B08-9F3F-053241E65652",
            "name": "Every Day",
            "lobCd": "Bank Accounts",
            "typeCd": "Chequing"
          }
        }
      );
    });

  });

  it('should get data from the API', function () {
    var linkFn, directive;

    // setup
    linkFn = $compile('<div td-example-hello-data></div>');
    directive = linkFn($rootScope);

    // executing
    $rootScope.$digest();
    $httpBackend.flush();
    expect(directive.find('.from-api').text()).toEqual('Hello, Every Day Chequing!');
  });
});
