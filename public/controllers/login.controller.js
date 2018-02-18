angular.module(`myApp`)
.controller(`LoginController`, [`$scope`, `$location`, `LoginService`,
  function($scope, $location, LoginService) {
    $scope.username = ``;
    $scope.password = ``;
    localStorage.removeItem(`verifiedUser`);

    $scope.login = function() {
      LoginService.login($scope.username, $scope.password)
      .then(user => {
        if (user) {
          localStorage.setItem(`verifiedUser`, user.id);
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