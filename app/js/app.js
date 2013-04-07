'use strict';


// Declare app level module which depends on filters, and services
angular.module('ledita', ['ledita.filters', 'ledita.services', 'ledita.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: MyCtrl1}});
    $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: MyCtrl2});
    $routeProvider.otherwise({redirectTo: '/view1'});
  }]);
