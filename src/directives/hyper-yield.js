require('../hyper-content-for');
require('../values/hyper-content-for-ids');

module.exports = angular.module('hyperContentFor')
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

        HYPER_CONTENT_FOR_IDS;
      }
    };
  });
