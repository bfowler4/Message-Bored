angular.module(`myApp`)
.controller(`UsersDetailController`, [`$scope`, `$routeParams`, `$location`, `UsersService`,
  function($scope, $routeParams, $location, UsersService) {
    UsersService.getUser($routeParams.id)
    .then(data => {
      if (!data) {
        return $location.url(`/notfound`);
      }
      data.created_at = new Date(data.created_at).toString();
      data.messages.forEach(curr => {
        curr.created_at = new Date(curr.created_at).toString();
      });
      $scope.user = data;
    });
  }
])