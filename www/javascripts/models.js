
(function() {

var module = angular.module('recipeApp.models', ['restangular']);

module.factory('RecipeRestangular', function(Restangular) {

  return Restangular.withConfig(function(RestangularConfigurer) {

    RestangularConfigurer.setBaseUrl('http://localhost/data');
    RestangularConfigurer.setRequestSuffix('.json');
    RestangularConfigurer.setRestangularFields({
      id: "recipe_id"
    });

  });

});


})();
