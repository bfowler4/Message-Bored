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
        if (topic) {
          return $location.url(`topics/${topic.id}`);
        }
        $scope.topic_name = ``;
        return $location.url(`topics/add_topic`);
      });
    }
  }
]);