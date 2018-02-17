angular.module(`myApp`)
.controller(`UsersDetailController`, [`$scope`, `$routeParams`, `UsersService`,
  function($scope, $routeParams, UsersService) {
    UsersService.getUser($routeParams.id)
    .then(data => {
      data.data.created_at = new Date(data.data.created_at).toString();
      data.data.messages.forEach(curr => {
        curr.created_at = new Date(curr.created_at).toString();
      });
      $scope.user = data.data;
    });
  }
])