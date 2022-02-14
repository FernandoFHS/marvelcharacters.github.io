// angular.module('marvelCharacters').controller('characterDetail', {
//   templateUrl: './views/characterDetail/characterDetail.html',
//   controller: ['$http', 'consts', '$stateParams', CharacterDetailController],
//   controllerAs: 'CharDetCtrl'
// });


angular.module('marvelCharacters').controller('CharacterDetailCtrl', [
  '$http',
  'consts',
  '$stateParams',
  'marvelService',
  CharacterDetailController
])

function CharacterDetailController($http, consts, $stateParams, marvelService) {
  const vm = this
  const id = $stateParams.id;
  vm.character = null

  marvelService.getCharacterById(id).then(res => {
    vm.character = res.data.data.results[0];
  })
  
}