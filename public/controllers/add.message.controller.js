angular.module(`myApp`)
.controller(`AddMessageController`, [`$scope`, `$location`, `$routeParams`, `TopicsService`, `AddMessageService`,
  function($scope, $location, $routeParams, TopicsService, AddMessageService) {
    if (!localStorage.verifiedUser) {
      $location.url(`login`);
    }

    TopicsService.getTopics()
    .then(topics => {
      for (let topic of topics) {
        if (topic.id == $routeParams.id) {
          return $scope.topic_name = topic.name;
        }
      }
      return $location.url(`notfound`);
    });

    $scope.messageBody = ``;

    $scope.addMessage = function() {
      AddMessageService.addMessage($scope.messageBody, $routeParams.id)
      .then(message => {
        if (message) {
          if (message === `logout`) {
            return $location.url(`logout`);
          }
          $location.url(`topics/${message.topic_id}`);
        } else {
          $location.url(`/`);
        }
      });
    }
  }
]);