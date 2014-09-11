var xml2js = require('xml2js');
var https = require('https');

var trustClient = require('wstrust-client');

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';

trustClient.requestSecurityToken({
    scope: 'https://dubdev.com',
    username: 'vagrant',
    password: 'vagrant',
    endpoint: 'https://dubdevdc.dubdev.com/adfs/services/trust/13/UsernameMixed'
}, function (rstr) {

    // Access the token and enjoy it!
    var rawToken = rstr.token;

    console.dir(rstr.token);



}, function (error) {

    // Error Callback
    console.log(error)

});
