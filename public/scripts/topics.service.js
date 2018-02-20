angular.module(`myApp`)
.service(`TopicsService`, [`$http`, `$location`,
  function($http, $location) {
    this.getTopics = function() {
      return $http.get(`http://localhost:8080/api/topics`)
      .then(data => {
        data.data.forEach(topic => {
          topic.created_at = new Date(topic.created_at).toString();
          topic.messages.forEach(message => {
            message.created_at = new Date(message.created_at).toString();
          });
        });
        return data.data;
      });
    }

    this.addTopic = function(name) {
      return $http.post(`http://localhost:8080/api/topics`, { name })
      .then(topic => {
        return topic.data;
      })
      .catch(err => {
        if (err.status === 401) {
          return $location.url(`logout`);
        }
        return err.data.message;
      });
    }
}]);
