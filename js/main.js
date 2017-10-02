var app = angular.module('myApp', ['ngRoute']);

// configure our routes
app.config(function($routeProvider) {
    $routeProvider

        // route for the home page
        // .when('/', {
        //     templateUrl : 'pages/home.html',
        //     controller  : 'mainController'
        // })

        // route for the getting started page
        .when('/intro', {
            templateUrl : 'pages/intro.html'
        })

        // route for the javascript page
        .when('/javascript', {
            templateUrl : 'pages/js.html'
        })

        // route for the scopes page
        .when('/scopes', {
            templateUrl : 'pages/scopes.html'
        })

        .otherwise({
			       redirectTo: '/intro'
		    });
});

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
