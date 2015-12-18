describe('Formatter Spec', function () {

	'use strict';

	var _tdFormatter;

	beforeEach(function () {

    module('com.td.oca.examplePersonal');

    inject(function (_tdExampleFormatter_) {
      _tdFormatter = _tdExampleFormatter_;
		});

	});

	it('should capitalize', function () {
    expect(_tdFormatter.capitalize('sample message')).toEqual('Sample message');
	});

});