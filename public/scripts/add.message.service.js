angular.module(`myApp`)
.service(`AddMessageService`, [`$http`, `$location`,
  function($http, $location) {
    this.addMessage = function(body, topic_id) {
      return $http.post(`http://localhost:8080/api/messages`, { body, topic_id })
      .then(message => {
        return message.data;
      })
      .catch(err => {
        if (err.status === 401) {
          return `logout`;
        }
        return false;
      });
    }
  }
]);