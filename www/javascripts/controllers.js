var recipeApp = angular.module('recipeApp.controllers', ['recipeApp.models', 'hmTouchevents']);

recipeApp.controller('IndexCtrl', function ($scope, $location, RecipeRestangular) {

  $scope.open = function(id) {
    $location.path("/show/"+id);
  };

  // Fetch all objects from the local JSON
  $scope.recipes = RecipeRestangular.all('recipe').getList();

  // -- Native navigation
  steroids.view.navigationBar.show("Recipes");

});

recipeApp.controller('ShowCtrl', function ($scope, $filter, $routeParams, RecipeRestangular) {

  // Fetch all objects from the local JSON
  RecipeRestangular.all('recipe').getList().then( function(recipes) {
    // Then select the one based on the view's id query parameter
    $scope.recipe = $filter('filter')(recipes, {recipe_id: $routeParams.id})[0];
  });

  // -- Native navigation
  steroids.view.navigationBar.show("Recipe " + steroids.view.params.id );

});