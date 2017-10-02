var app = angular.module('myApp', ['ngRoute', 'ngAnimate']);

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
            templateUrl : 'pages/intro.html',
            controller: 'introController'
        })

        // route for the javascript page
        .when('/javascript', {
            templateUrl : 'pages/js.html',
            controller: 'jsController'
        })

        // route for the scopes page
        .when('/scopes', {
            templateUrl : 'pages/scopes.html',
            controller: 'scopesController'
        })

        .otherwise({
			       redirectTo: '/intro'
		    });
});

// Controllers containing pages class to be used for individual animations
app.controller('introController', function($scope) {
    $scope.pageClass = 'page-intro';
});

// js page controller
app.controller('jsController', function($scope) {
    $scope.pageClass = 'page-js';
});

// scopes page controller
app.controller('scopesController', function($scope) {
    $scope.pageClass = 'page-scopes';
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
