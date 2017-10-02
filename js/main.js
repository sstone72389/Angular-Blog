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
            controller: 'mainController'
        })

        // route for the javascript page
        .when('/javascript', {
            templateUrl : 'pages/js.html',
            controller: 'aboutController'
        })

        // route for the scopes page
        .when('/scopes', {
            templateUrl : 'pages/scopes.html',
            controller: 'contactController'
        })

        .otherwise({
			       redirectTo: '/intro'
		    });
});

// CONTROLLERS ============================================
// home page controller
app.controller('mainController', function($scope) {
    $scope.pageClass = 'page-home';
});

// about page controller
app.controller('aboutController', function($scope) {
    $scope.pageClass = 'page-about';
});

// contact page controller
app.controller('contactController', function($scope) {
    $scope.pageClass = 'page-contact';
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
