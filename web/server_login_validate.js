var saml = require('saml20');
var fs = require('fs');
var xml2js = require('xml2js');
var https = require('https');

var trustClient = require('wstrust-client');

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';

trustClient.requestSecurityToken({
    scope: 'https://dubdev.com',
    username: 'vagrant',
    password: 'vagrant',
    endpoint: 'https://dubdevdc.dubdev.com/adfs/services/trust/13/UsernameMixed'
  },
  function (rstr) {
    // Access the token and enjoy it!
    var rawToken = rstr.token;
    console.dir(rstr.token);
    validateClaim(rstr.token);
  },
  function (error) {
    // Error Callback
    console.log(error)
});


//var rawAssertion = fs.readFileSync( "./valid_assertion.xml", "utf8");

function parseClaim(rawAssertion){
  saml.parse(rawAssertion, function(err, profile) {
      // err
      console.log(err);
      var claims = profile.claims; // Array of user attributes;
      var issuer = profile.issuer; // String Issuer name.

    console.log(claims);
    console.log(issuer);
  });
}

function validateClaim(rawAssertion){
  saml.parse(rawAssertion, function(err, profile) {

    var options = {
      publicKey:  fs.readFileSync( "./../ssl/signing-token.cer", "utf8")
    };

    console.log("------------");

    saml.validate(rawAssertion, options, function(err, profile) {
        // err

        if(profile!=null){
          var claims = profile.claims; // Array of user attributes;
          var issuer = profile.issuer; // String Issuer name.
          console.log(claims);
          console.log(issuer);
          return;
        }
        console.log(err);
    });
  });
}
