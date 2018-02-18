angular.module(`myApp`)
.controller(`NavigationController`, [`$scope`, `$location`, `TopicsService`, `verifiedUser`,
  function($scope, $location, TopicsService, verifiedUser) {
    $scope.goToLocation = (location) => { $location.url(`${location}`) };
    $scope.goToTopic = (id) => { $location.url(`/topics/${id}`) };
    TopicsService.getTopics()
    .then(topics => {
      $scope.topics = topics;
    });
    $scope.verifiedUser = localStorage.getItem(`verifiedUser`);
}]);