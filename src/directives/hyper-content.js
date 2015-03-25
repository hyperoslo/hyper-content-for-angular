require('../hyper-content-for');
require('../values/hyper-content-for-ids');

module.exports = angular.module('hyperContentFor')
  .directive('hyperContent', function() {
    return {
      scope: { 'for': '@' },

      restrict: 'E',

      transclude: true,

      controller: function($scope, $transclude, HYPER_CONTENT_FOR_IDS) {
        HYPER_CONTENT_FOR_IDS[$scope['for']] = $transclude();
      }
    };
  });
