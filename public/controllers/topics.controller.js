angular.module(`myApp`)
.controller(`TopicsController`, [`$scope`, `$routeParams`, `TopicsService`,
  function($scope, $routeParams, TopicsService) {
    TopicsService.getTopics()
    .then(topics => {
      $scope.topics = topics;
      for (let topic of topics) {
        if (topic.id == $routeParams.id) {
          $scope.topic = topic;
        }
      }
    });
  }
])