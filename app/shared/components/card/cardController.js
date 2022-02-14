angular.module('marvelCharacters').component('card', {
  templateUrl: './shared/components/card/card.html',
  controller: ['$http', 'consts', CardController],
  controllerAs: 'CardCtrl',
  bindings: {
    character: '=',
  }
});

function CardController($http, consts) {
  const vm = this
}