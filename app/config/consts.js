angular.module('marvelCharacters').constant('consts', {
  appName: 'Personagens Marvel',
  version: '1.0',
  owner: 'Fernando Henrique',
  year: '2022',
  apiUrl: 'https://gateway.marvel.com:443/v1/public',
  apiKey: '421abf802fb85e287079c2eacbb75401',
  apiPrivateKey: '39ca47e21a400c6fbea0f3bc443b8c7084bc3da6',
}).run(['$rootScope', 'consts', function($rootScope, consts) {
  $rootScope.consts = consts
}])
