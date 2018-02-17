angular.module(`myApp`)
.service(`LoginService`, [`$http`,
  function($http) {

    this.login = function(username, password) {
      return $http.get(`http://localhost:8080/api/users`)
      .then(users => {
        for (let user of users.data) {
          if (user.username === username && user.password === password) {
            return user;
          }
        }
        return false;
      });
    }
  }
])