angular.module('marvelCharacters').config([
  '$stateProvider',
  '$urlRouterProvider',
  '$locationProvider',
  function($stateProvider, $urlRouterProvider,$locationProvider) {
    $locationProvider.hashPrefix('');
    $stateProvider.state('charactersList', {
      url: "/lista-de-personagens",
      templateUrl: "views/charactersList/charactersList.html"
    }).state('aboutProject', {
      url: "/sobre-o-projeto",
      templateUrl: "views/aboutProject/aboutProject.html"
    })
    .state('characterDetail', {
      url: "/detalhes-do-personagem/:id",
      templateUrl: "views/characterDetail/characterDetail.html"
    })
    $urlRouterProvider.otherwise('/lista-de-personagens')
}])
