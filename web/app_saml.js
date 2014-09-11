var saml = require('saml20');
var fs = require('fs');
var xml2js = require('xml2js');
var https = require('https');
var trustClient = require('wstrust-client');

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';


function login(username, password, callback)
{
  trustClient.requestSecurityToken({
      scope: 'https://dubdev.com',
      username: username,
      password: password,
      endpoint: 'https://dubdevdc.dubdev.com/adfs/services/trust/13/UsernameMixed'
    },
    function (rstr) {
      if(rstr.token!=null){
        validateClaim(rstr.token, callback);
      }
    },
    function (error) {
      // Error Callback
      console.log(error)
  });
}

function validateClaim(rawAssertion, callback){
  console.log('Validating Claim');
  saml.parse(rawAssertion, function(err, profile) {

    var options = {
      publicKey:  fs.readFileSync( "./../ssl/signing-token.cer", "utf8")
    };

    saml.validate(rawAssertion, options, function(err, profile) {

        if(err!=null){
          console.log("-----------");
          console.log(err.message);
          callback({"Error" : err.message});
          return;
        }
        if(profile!=null){
          var claims = profile.claims; // Array of user attributes;
          var issuer = profile.issuer; // String Issuer name.
          console.log(claims);
          console.log(issuer);
          console.log(rawAssertion);
          callback(  {"Token": rawAssertion||'', "Profile" : profile||''});
          //callback(profile);
        }

    });
  });
}

module.exports.login = login;
