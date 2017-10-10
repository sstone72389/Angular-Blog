var app = angular.module('myApp', ['ngRoute', 'ngAnimate']);

// configure our routes
app.config(function($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'pages/intro.html'
        })

        // route for the getting started page
        .when('/intro', {
            templateUrl : 'pages/intro.html',
            controller: 'introController',
            activetab: 'intro'
        })

        // route for the javascript page
        .when('/javascript', {
            templateUrl : 'pages/js.html',
            controller: 'jsController',
            activetab: 'javascript'
        })

        // route for the scopes page
        .when('/scopes', {
            templateUrl : 'pages/scopes.html',
            controller: 'scopesController',
            activetab: 'scopes'
        })

        // route for the scopes-cont page
        .when('/scopes-cont', {
            templateUrl : 'pages/scopes-cont.html',
            controller: 'scopesContController',
            activetab: 'scopes-cont'
        })

        // route for the data-binding page
        .when('/data-binding', {
            templateUrl : 'pages/data-binding.html',
            controller: 'bindingController',
            activetab: 'data-binding'
        })

        .when('/routing', {
            templateUrl : 'pages/routing.html',
            controller: 'routingController',
            activetab: 'routing'
        })

        .when('/validation', {
            templateUrl : 'pages/validation.html',
            activetab: 'validation'
        })

        .otherwise({
			       redirectTo: '/intro'
		    });
});


// Exposing route to the controller
app.controller('navController', function ($scope, $route) {
    $scope.$route = $route;
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

// scopes cont controller
app.controller('scopesContController', function($scope) {
    $scope.pageClass = 'page-scopes-cont';
});

// binding controller
app.controller('bindingController', function($scope) {
    $scope.pageClass = 'page-data-binding';
});

// routing controller
app.controller('routingController', function($scope) {
    $scope.pageClass = 'page-routing';
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

app.controller('interestController', function($scope) {
  $scope.amt = 50000;
  $scope.terms = 1;
  $scope.rate= 10;
  $scope.interestamt= function() {
    return ($scope.amt*$scope.rate*$scope.terms)/100;
  };
});

app.controller('MathController', function($scope) {
  $scope.counter = 0;
  $scope.add = function(amount) { $scope.counter += amount; };
  $scope.subtract = function(amount) { $scope.counter -= amount; };
});

app.controller('FormController', function($scope) {
    $scope.master = {};
    $scope.save= function(employee) {
        $scope.master = angular.copy(employee);
    };
    $scope.reset = function() {
        $scope.employee = angular.copy($scope.master);
    };
});
