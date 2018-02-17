angular.module(`myApp`, ['ngRoute']);

angular.module(`myApp`)
.config(function($routeProvider, $locationProvider) {
  $routeProvider.when(`/`, {
    controller: `HomeController`,
    templateUrl: `/views/home.html`
  })
  .when(`/register`, {
    controller: `RegisterController`,
    templateUrl: `/views/register.html`
  })
  .when(`/login`, {
    controller: `LoginController`,
    templateUrl: `/views/login.html`
  })
  .when(`/logout`, {
    controller: `LogoutController`,
    templateUrl: `/views/logout.html`
  })
  .when(`/users`, {
    controller: `UsersController`,
    templateUrl: `/views/users.html`
  })
  .when(`/users/:id`, {
    controller: `UsersDetailController`,
    templateUrl: `views/users_detail.html`
  })
  .when(`/latest`, {
    controller: `LatestController`,
    templateUrl: `views/latest.html`
  })
  .when(`/topics/:id`, {
    controller: `TopicsController`,
    templateUrl: `views/topics.html`
  })
  .otherwise({
    templateUrl: `/views/notfound.html`
  });

  $locationProvider.html5Mode(true);
})
.run(function() {

});