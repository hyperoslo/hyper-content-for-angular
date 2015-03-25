require('../../src/directives/hyper-content');

describe('hyper-content tag', function() {
  var $compile,
      $rootScope,
      HYPER_CONTENT_FOR_IDS;

  beforeEach(angular.mock.module('hyperContentFor'));

  beforeEach(inject(function(_$compile_, _$rootScope_, _HYPER_CONTENT_FOR_IDS_) {
    $compile = _$compile_;
    $rootScope = _$rootScope_;
    HYPER_CONTENT_FOR_IDS = _HYPER_CONTENT_FOR_IDS_;
  }));

  it('stores the transcluded content in the HYPER_CONTENT_FOR_IDS hash with the correct key', function() {
    $compile("<hyper-content for='header'><h2>Sub-header</h2></hyper-yield>")($rootScope);
    $rootScope.$digest();

    expect(HYPER_CONTENT_FOR_IDS['header'][0].outerHTML).toEqual('<h2 class="ng-scope">Sub-header</h2>');
  });

  it('removes the transcluded content from the directive', function() {
    var contentElement = $compile("<hyper-content for='header'><h2>Sub-header</h2></hyper-yield>")($rootScope);
    $rootScope.$digest();

    expect(contentElement.html()).toEqual('');
  });
});
