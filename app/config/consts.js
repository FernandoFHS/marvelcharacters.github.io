angular.module('marvelCharacters').constant('consts', {
  appName: 'Personagens Marvel',
  version: '1.0',
  owner: 'Fernando Henrique',
  year: '2022',
  apiUrl: 'https://gateway.marvel.com:443/v1/public',
  apiKey: '5a237863b3cc2061003cbbc4fe20dc06',
  apiPrivateKey: 'fbf255068eccea6d0ef951b9f25626b57ab2fe72',
}).run(['$rootScope', 'consts', function($rootScope, consts) {
  $rootScope.consts = consts
}])
