angular.module(`myApp`)
.controller(`HomeController`, [`$scope`, `$location`, `UsersService`, 
function($scope, $location, UsersService) {
  $scope.user_id_search = ``;

  $scope.searchForUser = function() {
    let id = $scope.user_id_search;
    $scope.user_id_search = ``;
    $location.url(`/users/${id}`);
  }
}]);