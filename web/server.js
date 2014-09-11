var express = require("express");
var fs = require('fs');
var console_ten = require('console-ten');
var app_saml = require('./app_saml');

console_ten.init(console);

var app = express();
app.use(express.static(__dirname + '/public'))

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
      console.log("Listening on " + port);
});

app.get('/login/:username/:password', function(req, res) {
  console.log("Login" + req.params.username + req.params.password);
      app_saml.login(
        req.params.username,
        req.params.password,
        function(loginResponse){
          console.log(loginResponse);
          res.send(loginResponse)
        }
      );

});

app.post('/login', function(req, res) {
  console.log("Login" + req.body.username + req.body.password);
      app_saml.login(
        req.params.username,
        req.params.password,
        function(loginResponse){
          console.log(loginResponse);
          res.send(loginResponse)
        }
      );
});
