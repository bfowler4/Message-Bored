angular.module(`myApp`)
.service(`RegisterService`, [`$http`, `$location`,
  function($http, $location) {

    this.register = function(username, password) {
      return $http.post(`http://localhost:8080/api/users`, { username, password })
      .then(user => {
        if (user.data.hasOwnProperty(`message`)) {
          return false;  
        }
        return user.data;
      })
    }
  }
])