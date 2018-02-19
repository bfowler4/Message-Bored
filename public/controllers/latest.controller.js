angular.module(`myApp`)
.controller(`LatestController`, [`$scope`, `LatestService`,
  function($scope, LatestService) {
    LatestService.getMessages()
    .then(messages => {
      $scope.messages = messages;
    });
  }  
])