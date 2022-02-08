angular.module('marvelCharacters').config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('charactersList', {
      url: "/lista-de-personagens",
      templateUrl: "views/charactersList.html"
    })
    $urlRouterProvider.otherwise('/lista-de-personagens')
}])
