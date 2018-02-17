angular.module(`myApp`)
.controller(`LoginController`, [`$scope`, `$location`, `verifiedUser`, `LoginService`,
  function($scope, $location, verifiedUser, LoginService) {
    $scope.username = ``;
    $scope.password = ``;

    $scope.login = function() {
      LoginService.login($scope.username, $scope.password)
      .then(user => {
        if (user) {
          verifiedUser.id = user.id;
          $location.url(`/`);
        } else {
          $scope.username = ``;
          $scope.password = ``;
          $location.url(`/login`);
        }
      });
    }
  }
])