angular.module(`myApp`)
.controller(`NavigationController`, [`$scope`, `$location`, `TopicsService`, `verifiedUser`,
  function($scope, $location, TopicsService, verifiedUser) {
    TopicsService.getTopics()
    .then(topics => {
      $scope.topics = topics;
    });
    
    $scope.goToLocation = (location) => { $location.url(`${location}`) };
    $scope.goToTopic = (id) => { $location.url(`/topics/${id}`) };
    $scope.verifiedUser = localStorage.getItem(`verifiedUser`);
}]);