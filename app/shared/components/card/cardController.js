angular.module('marvelCharacters').controller('CardCtrl', [
  '$http',
  'consts',
  CardController
])

function CardController($http, consts) {
  const vm = this
  vm.title = 'Teste'
}