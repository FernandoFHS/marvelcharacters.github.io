angular.module('marvelCharacters').controller('CharactersListCtrl', [
  '$http',
  'consts',
  'marvelService',
  CharactersListController
])

function CharactersListController($http, consts, marvelService,md5) {
  const vm = this
  vm.value = (60)
  //console.log(marvelService.getCharacters($http, consts));
  marvelService.getCharacters($http, consts).then(res => {
    console.log(res);
  })
  
  // vm.getSummary = function() {
  //   const url = `${consts.apiUrl}/billingSummary`;
  //   $http.get(url).then(function(response) {
  //     const {credit = 0, debt = 0} = response.data
  //     vm.credit = credit
  //     vm.debt = debt
  //     vm.total = credit - debt
  //   })
  // }

  // vm.getSummary()
}
