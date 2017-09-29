var app = angular.module('myApp', []);

// app.directive('prettyprint', function() {
//     return {
//         restrict: 'C',
//         link: function postLink(scope, element, attrs) {
//               element.html(prettyPrintOne(scope.dom));
//         }
//     };
// });

app.run(function($rootScope) {
  $rootScope.name = "Angular Student";
});
