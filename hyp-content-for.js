angular.module("hypContentFor", [])
  .constant("HYP_CONTENT_FOR_IDS", [ ])

  .directive("content", function (HYP_CONTENT_FOR_IDS) {
    return {
      scope: { "for": "@" },

      transclude: true,

      controller: function ($scope, $transclude) {
        HYP_CONTENT_FOR_IDS[$scope["for"]] = $transclude();
      }
    };
  })

  .directive("yield", function ($interval, HYP_CONTENT_FOR_IDS) {
    return {
      scope: { to: "@" },

      link: function (scope, elem) {
        interval = null;

        repeatFn = function () {
          content = HYP_CONTENT_FOR_IDS[scope.to];

          if (content) {
            $interval.cancel(interval);
          } else {
            return;
          }

          elem.replaceWith(content);
        }

        repeatFn();
        interval = $interval(repeatFn, 100, 9);
      }
    };
  });
