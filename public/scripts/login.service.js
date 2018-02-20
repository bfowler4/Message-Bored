angular.module(`myApp`)
.service(`LoginService`, [`$http`, `$location`,
  function($http, $location) {

    this.login = function(username, password) {
      return $http.post(`http://localhost:8080/api/login`, { username, password })
      .then(user => {
        return user.data;
      })
      .catch(err => {
        return false;
      });
    }
  }
])