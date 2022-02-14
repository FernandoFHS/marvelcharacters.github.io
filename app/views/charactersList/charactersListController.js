angular.module('marvelCharacters').controller('CharactersListCtrl', [
  '$http',
  'consts',
  'marvelService',
  'toastr',
  CharactersListController
])

function CharactersListController($http, consts, marvelService,toastr) {
  const vm = this
  vm.search = null
  vm.countItens = 0

  vm.getCharacters = function(search=null,offset=0) {
    if(vm.charListInfo && offset && vm.charListInfo.total===vm.countItens) {
      toastr.error('Não há mais itens a carregar!', 'Opss!',{positionClass: 'toast-top-left',});
      return
    }
    
    marvelService.getCharacters(search,offset).then(res => {
      const array = res.data.data.results
      if(offset) {
        vm.characters = vm.characters.concat(array)
      }else {
        vm.characters = array
        vm.oneCharacter = res.data.data.results[0]
        vm.countItens = 0
      }
      vm.charListInfo = res.data.data
      vm.countItens = vm.countItens + vm.charListInfo.count
    })
  }

  vm.getCharacters()
  
  vm.changeSearch = function() {
    vm.getCharacters(vm.search)
  }

  vm.loadMore = function() {
    vm.getCharacters(vm.search,vm.countItens)
  }

  

}
