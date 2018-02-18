angular.module(`myApp`)
.service(`LogoutService`, [`$http`,
  function($http) {
    $http.post(`http://localhost:8080/api/logout`);
  }
]);