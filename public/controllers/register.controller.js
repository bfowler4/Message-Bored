angular.module(`myApp`)
.controller(`RegisterController`, [`$scope`, `$location`, `RegisterService`,
  function($scope, $location, RegisterService) {
    $scope.username = ``;
    $scope.password = ``;

    $scope.register = function() {
      RegisterService.register($scope.username, $scope.password)
      .then(user => {
        if (user) {
          $location.url(`/login`);
        } else {
          $scope.username = ``;
          $scope.password = ``;
          $location.url(`/register`);
        }
      });
    }
  }
])