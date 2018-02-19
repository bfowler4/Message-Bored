angular.module(`myApp`)
.service(`TopicsService`, [`$http`,
  function($http) {
    this.getTopics = function() {
      return $http.get(`http://localhost:8080/api/topics`)
      .then(data => {
        data.data.forEach(topic => {
          topic.created_at = new Date(topic.created_at).toString();
          topic.messages.forEach(message => {
            message.created_at = new Date(topic.created_at).toString();
          });
        });
        return data.data;
      });
    }
}]);