angular.module('marvelCharacters', [
  'ui.router',
  'ngAnimate',
  'toastr',
  'ENV',
  'angular-md5'
])
angular.module('marvelCharacters').controller('IndexCtrl', [
  'ENV',
  IndexController
])

function IndexController(ENV) {
  const vm = this
  vm.baseUrl = ENV.redirectURI
}
