angular.module(`myApp`)
.controller(`NavigationController`, [`$scope`, `$location`, `TopicsService`,
  function($scope, $location, TopicsService) {
    TopicsService.getTopics()
    .then(topics => {
      topics.sort(compare);
      $scope.topics = topics;
    });
    
    $scope.goToLocation = (location) => { $location.url(`${location}`) };
    $scope.goToTopic = (id) => { $location.url(`/topics/${id}`) };
    $scope.verifiedUser = localStorage.getItem(`verifiedUser`);
}]);


function compare(a , b) {
  return a.messages.length < b.messages.length;
}