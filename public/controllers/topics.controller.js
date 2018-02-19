angular.module(`myApp`)
.controller(`TopicsController`, [`$scope`, `$location`, `$routeParams`, `TopicsService`,
  function($scope, $location, $routeParams, TopicsService) {
    TopicsService.getTopics()
    .then(topics => {
      $scope.topics = topics;
      for (let topic of topics) {
        if (topic.id == $routeParams.id) {
          $scope.topic = topic;
        }
      }
    });

    $scope.addMessage = function() {
      $location.url(`topics/${$routeParams.id}/add_message`);
    }

    $scope.verifiedUser = localStorage.verifiedUser;
  }
])