
angular.module('recipeApp', [
  'recipeApp.models',
  'recipeApp.controllers'
]).
config(function ($routeProvider) {
  $routeProvider.when('/index', {templateUrl: 'partials/recipe/index.html', controller: 'IndexCtrl'});
  $routeProvider.when('/show', {templateUrl: 'partials/recipe/show.html', controller: 'ShowCtrl'});
  $routeProvider.otherwise({redirectTo: '/index'});
});