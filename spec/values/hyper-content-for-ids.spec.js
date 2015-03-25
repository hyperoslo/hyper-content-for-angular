require('../../src/values/hyper-content-for-ids');

describe('HYPER_CONTENT_FOR_IDS value', function() {
  var HYPER_CONTENT_FOR_IDS;

  beforeEach(angular.mock.module('hyperContentFor'));

  it('is defined on the module', function() {
    expect(function() { inject(HYPER_CONTENT_FOR_IDS); }).not.toThrow();
  });
});
