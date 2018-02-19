angular.module(`myApp`)
.service(`UsersService`, [`$http`, 
  function($http) {
    this.getUsers = function() {
      return $http.get(`http://localhost:8080/api/users`)
      .then(function(data) {
        data.data.forEach(function(user) {
          user.created_at = new Date(user.created_at).toString();
        });
        return data.data;
      });
    }

    this.getUser = function(id) {
      return $http.get(`http://localhost:8080/api/users/${id}`)
      .then(function(data) {
        if (data.data) {
          return data.data;
        }
        return false;
      })
      .catch(err => {
        console.log(err);
      });
    }
}]);