describe('Hello World Directive Spec', function () {

  'use strict';

  var $rootScope,
    $compile;

  beforeEach(function () {

    module('com.td.oca.examplePersonal');

    inject(function (_$rootScope_, _$compile_, _$locale_) {
      $rootScope = _$rootScope_;
      $compile = _$compile_;
      _$locale_.setLocale('en_CA');

    });

  });

  it('should display message', function () {
    var linkFn, directive;

    // setup
    $rootScope.msg = 'World!';
    linkFn = $compile('<div td-example-hello-world td-hello-world-msg="{{msg}}"></div>');
    directive = linkFn($rootScope);

    // executing
    $rootScope.$digest();
    expect(directive.find('.hello').text()).toEqual('Hello World!Let\'s get coding!');
  });

});
