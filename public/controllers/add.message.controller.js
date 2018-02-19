angular.module(`myApp`)
.controller(`AddMessageController`, [`$scope`, `$location`, `$routeParams`, `AddMessageService`,
  function($scope, $location, $routeParams, AddMessageService) {
    if (!localStorage.verifiedUser) {
      $location.url(`login`);
    }

    $scope.messageBody = ``;

    $scope.addMessage = function() {
      AddMessageService.addMessage($scope.messageBody, $routeParams.id)
      .then(message => {
        $location.url(`topics/${message.topic_id}`);
      });
    }
  }
]);