// angular.module('marvelCharacters').factory('Interceptor', Interceptor).config(['$httpProvider', Interceptor]);

// Interceptor.$inject = ['$q'];

// function Interceptor($q) {
//   return {
//       request: function(config) {
//         console.log('config',config);
//           config.headers['X-TOKEN'] = "exemplo";
//           return config;
//       },
//       responseError: function(error) {
//           if (error.status === 401 || error.status === 403) {
//               //faz alguma coisa.
//           }
//           return $q.reject(error);
//       }
//   };
// }

