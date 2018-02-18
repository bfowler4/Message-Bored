angular.module(`myApp`)
.controller(`LogoutController`, [`$location`, `verifiedUser`, `LogoutService`,
  function($location, verifiedUser, LogoutService) {
    localStorage.removeItem(`verifiedUser`);
    $location.url(`/`);
  }
])