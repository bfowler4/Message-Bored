angular.module(`myApp`)
.controller(`UsersController`, [`$scope`, `$location`, `UsersService`,
  function($scope, $location, UsersService) {
    $scope.users = UsersService.getUsers();
    $scope.goToUser = function(id) {
      $location.url(`/users/${id}`);
    }
  }]);