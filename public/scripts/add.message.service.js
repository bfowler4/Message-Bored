angular.module(`myApp`)
.service(`AddMessageService`, [`$http`,
  function($http) {
    this.addMessage = function(body, topic_id) {
      return $http.post(`http://localhost:8080/api/messages`, { body, topic_id })
      .then(message => {
        return message.data;
      });
    }
  }
]);