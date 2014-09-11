'use strict';


var app = angular.module('samlApp',[]);

app.controller("LogInCtrl", function($scope, $http) {

    $scope.data = {
      'username':'vagrant',
      'password':'vagrant'
    };


    $scope.goLogin = function (username, password, tmp) {
      console.log("Attempting Login: " + username + " " + password);
      //console.dir($scope);

      $http.get('/login/' + username + '/' + password)
        .then(function(res) {
          $scope.loginResponse = {
            rstr : res.data
          }
          console.dir(res.data);
        });
/*
        $http.post('/login', {
          'username':'vagrant',
          'password':'vagrant'
        })
        .success(console.log("success"))
        .error(console.log("sad face"));
*/
    };
  });
