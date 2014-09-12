'use strict';


var app = angular.module('samlApp',[]);

app.controller("LoginCtrl", function($scope, $http, AdfsService) {

  $scope.data = {
    'username':'vagrant',
    'password':'vagrant'
  };


  $scope.goLogin = function (username, password) {
    console.log("Attempting Login: " + username + " " + password);
    AdfsService.Login(username, password);
  };
});

app.service("AdfsService", function($rootScope, $http){

  this.Login = function(username, password){
    console.log("doing a login");
    $http.get('/login/' + username + '/' + password)
      .then(function(res) {
        $rootScope.loginResponse = res.data;
        console.dir(res.data);
      });

  };

  this.Logout = function(){console.log("doing a logout")};

});
