angular.module(`myApp`)
.service(`UsersService`, [`$http`, 
  function($http) {
    let users = [];

    $http.get(`http://localhost:8080/api/users`)
    .then(function(data) {
      data.data.forEach(function(user) {
        user.created_at = new Date(user.created_at).toString();
        users.push(user);
      });
    });

    this.getUsers = function() {
      return users;
    }

    this.getUser = function(id) {
      return $http.get(`http://localhost:8080/api/users/${id}`)
      .then(function(data) {
        return data;
      });
    }
}]);