'use strict';

angular.module('App', [
  	'ngRoute',
  	'Group',
  	'ngAnimate',
  	'ngAria',
  	'ngMessages',
  	'ngMaterial'
])
.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'scripts/main/views/dashboard.html'
  });
});
