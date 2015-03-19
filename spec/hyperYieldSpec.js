describe('hyper-yield tag', function() {
  var $compile,
      $rootScope;

  beforeEach(module('hyperContentFor'));

  beforeEach(inject(function(_$compile_, _$rootScope_){
    $compile = _$compile_;
    $rootScope = _$rootScope_;
  }));

  it('Replace with content from matching hyper-content', function() {
    var element = $compile("<hyper-content to='header'><h2>Content for header</h2></hyper-yield>")($rootScope);
    var element = $compile("<hyper-yield from='header'><h2>Default</h2></hyper-yield>")($rootScope);

    $rootScope.$digest();

    expect(element.html()).toContain("<h2 class=\"ng-scope\">Content for header</h2>");
  });
});
