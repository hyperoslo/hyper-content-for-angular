angular.module('hyperContentFor', [])
  .value('HYPER_CONTENT_FOR_IDS', { })

  .directive('hyperContent', function() {
    return {
      scope: { 'for': '@' },

      restrict: 'E',

      transclude: true,

      controller: function($scope, $transclude, HYPER_CONTENT_FOR_IDS) {
        HYPER_CONTENT_FOR_IDS[$scope['for']] = $transclude();
      }
    };
  })

  .directive('hyperYield', function(HYPER_CONTENT_FOR_IDS) {
    return {
      scope: { to: '@' },

      restrict: 'E',

      link: function(scope, elem) {

        watchFn = function() { return HYPER_CONTENT_FOR_IDS[scope.to]; };

        scope.$watch(watchFn, function(newValue) {
          elem.empty();
          elem.append(newValue);
        });
      }
    };
  });
