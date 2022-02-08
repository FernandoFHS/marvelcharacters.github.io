angular.module('marvelCharacters').service('marvelService',
  function() {
    this.getCharacters = function($http, consts) {
      const url = `${consts.apiUrl}/characters?apiKey=${consts.apiPrivateKey}`;
      return $http.get(url);
    }
  }
)