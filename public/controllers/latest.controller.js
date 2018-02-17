angular.module(`myApp`)
.controller(`LatestController`, [`$scope`, `LatestService`,
  function($scope, LatestService) {
    $scope.messages = LatestService.getMessages();
  }  
])