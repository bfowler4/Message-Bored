angular.module(`myApp`)
.service(`RegisterService`, [`$http`, `$location`,
  function($http, $location) {

    this.register = function(username, password) {
      return $http.post(`http://localhost:8080/api/register`, { username, password })
      .then(user => {
        return user.data;
      })
      .catch(err => {
        console.log(err.data.message);
        $location.url(`/register`);
      })
    }
  }
])