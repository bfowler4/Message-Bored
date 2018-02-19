angular.module(`myApp`)
.controller(`UsersController`, [`$scope`, `$location`, `UsersService`,
  function($scope, $location, UsersService) {
    UsersService.getUsers()
    .then(users => {
      $scope.users = users;
    });

    $scope.goToUser = function(id) {
      $location.url(`/users/${id}`);
    }
  }]);