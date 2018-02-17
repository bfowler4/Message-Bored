angular.module(`myApp`)
.service(`LatestService`, [`$http`,
  function($http) {
    let messages = [];

    $http.get(`http://localhost:8080/api/messages/latest`)
    .then(data => {
      data.data.forEach(curr => {
        curr.created_at = new Date(curr.created_at).toString();
        messages.push(curr);
      });
    });


    this.getMessages = () => { return messages; };
  }
]);