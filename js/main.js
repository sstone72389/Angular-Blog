var app = angular.module('myApp', []);

app.run(function($rootScope) {
  $rootScope.name = "Angular Student"
});

app.controller('myFirstController', function($scope){
  $scope.student = {
    name: "Bojack Horseman"
  };
});

app.controller('ParentController', function($scope) {
  $scope.student = {saidHello: false};
});

app.controller('ChildController', function($scope) {
  $scope.sayHello = function() {
    $scope.student.saidHello = true;
  }
  $scope.reset = function() {
    $scope.student.saidHello = false;
  }
});
