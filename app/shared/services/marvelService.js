angular.module('marvelCharacters').service('marvelService', [
  'md5', 
  '$http',
  'consts',
  function (md5, $http, consts) {

    this.generateAuthQueryString = function () {
      const now = new Date().getTime()
      const hash = md5.createHash(now + consts.apiPrivateKey + consts.apiKey)
      return `ts=${now}&apikey=${consts.apiKey}&hash=${hash}`
    }

    this.getCharacters = function (search=null,offset=0) {
      const url = `${consts.apiUrl}/characters`;
      const limit = 20;
      const authString = this.generateAuthQueryString();
      let queryString = `offset=${offset}&limit=${limit}&${authString}`;
      if(search)
        queryString = `nameStartsWith=${search}&${queryString}`

      return $http({
        url: `${url}?${queryString}`,
        method: "GET"
      });

    }
  }
]
)