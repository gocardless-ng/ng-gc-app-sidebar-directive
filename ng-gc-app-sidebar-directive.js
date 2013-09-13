/**
 * @license ng-gc-app-sidebar-directive v0.1.0
 * (c) 2013-2013 GoCardless, Ltd.
 * https://github.com/gocardless-ng/ng-gc-app-sidebar-directive.git
 * License: MIT
 */'use strict';

angular.module('gc.appSidebar', [
  'gc.appContent',
  'app-sidebar-template.html'
])
.directive('appSidebar', [
  function appSidebarDirective() {

    return {
      restrict: 'E',
      templateUrl: 'app-sidebar-template.html',
      transclude: true,
      replace: true,
      link: function link(scope, element, attrs) {
        scope.sidebarInclude = attrs.sidebarInclude;
      }
    };

  }
]);

angular.module('app-sidebar-template.html', []).run(function($templateCache) {
  $templateCache.put('app-sidebar-template.html',
    '<div><app-content><div class="grid u-cf"><div class="grid__cell app-sidebar"><ng-include src="sidebarInclude"></ng-include></div><div class="grid"><div class="grid__cell" ng-transclude=""></div></div></div></app-content></div>');
});
