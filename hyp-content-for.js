angular.module("hypContentFor", [])
  .value("HYP_CONTENT_FOR_IDS", { })

  .directive("content", function () {
    return {
      scope: { "for": "@" },

      restrict: "E",

      transclude: true,

      controller: function ($scope, $transclude, HYP_CONTENT_FOR_IDS) {
        HYP_CONTENT_FOR_IDS[$scope["for"]] = $transclude();
      }
    };
  })

  .directive("yield", function ($interval, HYP_CONTENT_FOR_IDS) {
    return {
      scope: { to: "@" },

      restrict: "E",

      link: function (scope, elem) {
        interval = null;

        watchFn = function () { return HYP_CONTENT_FOR_IDS[scope.to]; };

        scope.$watch(watchFn, function (newValue) {
          elem.empty();
          elem.append(newValue);
        });
      }
    };
  });
