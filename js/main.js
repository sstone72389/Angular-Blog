var app = angular.module('myApp', []);

app.run(function($rootScope) {
  $rootScope.name = "Angular Student"
});

app.controller('myFirstController', function($scope){
  $scope.student = {
    name: "Bojack Horseman"
  };
});
