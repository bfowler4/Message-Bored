angular.module(`myApp`)
.controller(`AddTopicController`, [`$scope`, `$location`, `TopicsService`,
  function($scope, $location, TopicsService) {
    if (!localStorage.verifiedUser) {
      $location.url(`login`);
    }

    $scope.topic_name = ``;

    $scope.addTopic = function() {
      TopicsService.addTopic($scope.topic_name)
      .then(topic => {
        if (topic.id) {
          return $location.url(`topics/${topic.id}`);
        }
        $scope.topic_name = ``;
        $scope.error = `Error: ${topic}`;
      });
    }
  }
]);