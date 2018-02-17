angular.module(`myApp`)
.controller(`LogoutController`, [`$location`, `verifiedUser`,
  function($location, verifiedUser) {
    verifiedUser.id = ``;
    $location.url(`/`);
  }
])