angular.module(`myApp`)
.controller(`LogoutController`, [`$location`, `LogoutService`,
  function($location, LogoutService) {
    localStorage.removeItem(`verifiedUser`);
    $location.url(`/`);
  }
])