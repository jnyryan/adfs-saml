var saml = require('saml20');


var rawAssertion = '<Assertion ID="_91e586e8-079b-42d2-9a2b-5771ce364b06" IssueInstant="2014-08-25T13:26:16.895Z" Version="2.0" xmlns="urn:oasis:names:tc:SAML:2.0:assertion"><Issuer>http://dubdevdc.dubdev.com/adfs/services/trust</Issuer><ds:Signature xmlns:ds="http://www.w3.org/2000/09/xmldsig#"><ds:SignedInfo><ds:CanonicalizationMethod Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#"/><ds:SignatureMethod Algorithm="http://www.w3.org/2001/04/xmldsig-more#rsa-sha256"/><ds:Reference URI="#_91e586e8-079b-42d2-9a2b-5771ce364b06"><ds:Transforms><ds:Transform Algorithm="http://www.w3.org/2000/09/xmldsig#enveloped-signature"/><ds:Transform Algorithm="http://www.w3.org/2001/10/xml-exc-c14n#"/></ds:Transforms><ds:DigestMethod Algorithm="http://www.w3.org/2001/04/xmlenc#sha256"/><ds:DigestValue>V4IoEbBGFY9pPB99fpaWsm02WpgrdTg7pd7iqF3glYE=</ds:DigestValue></ds:Reference></ds:SignedInfo><ds:SignatureValue>eK/n0jUQLonHQ7MzGT8XPyHjGs53GwAZSKcswKrx6isIj896tcNK1Zc+fiSgVuSCbvFC1kcBVvZIM2RoUVAJbLv8LRp9el7SOZpWTdsQqHdSRUjRRpKB9Xt3oclyr+q1ocfMB1jsHKy+0NcQluWjsJrv2N0SqFNv+tRJ1PDLwkdZdLH/QmaUVoJeOEoIXd8sMh+lfIDFpWLJCZMNdUQ1ZALCnZb8R9Aat8g10yENt23mzKxe1uZy5O3Qz5neiqp0uafOJlgRaO1YASwcUnAcPg3JePwVFIMabJ8j+GubDD8wmCzImsR9w5+z9DBYdo8obtK84hZmjzv70/n1ev5swA==</ds:SignatureValue><KeyInfo xmlns="http://www.w3.org/2000/09/xmldsig#"><ds:X509Data><ds:X509Certificate>MIIC4jCCAcqgAwIBAgIQVDz+x7Ybh79KBXpVODZ2gzANBgkqhkiG9w0BAQsFADAtMSswKQYDVQQDEyJBREZTIFNpZ25pbmcgLSBkdWJkZXZkYy5kdWJkZXYuY29tMB4XDTE0MDgyNTEyMDU0MFoXDTE1MDgyNTEyMDU0MFowLTErMCkGA1UEAxMiQURGUyBTaWduaW5nIC0gZHViZGV2ZGMuZHViZGV2LmNvbTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAJ3lyRvjXTINcVbvEuzh5f2ScDNknuDRzu09EK1uU2kNN4qKQsEFvz1MMXlcGRyyL19IoB865U4tmvr/jxo41PZsFj/Waa9auw2eeGbJ0scOUioiX1R0Jw8z5VEhDLy8VcD6Kixx0nyUMwuYjBUgAIvLUP1H2sW+h3X4i5vTyJBMw79McjlU3Da0+ctYB6R6FbeME9cCMpd7zss1XfvwqVKs+v5IIfX0hekwrjVXIBSTUf1+7JuujXw2JuAVuwCY3KVIKkAewcJvIOtOYJXtftcGU9R+cORpLY7Uv5mwcaVbnjlC1hJTXuYkwi0NGA92r1TlTXBL40vMPyocPcZgyOUCAwEAATANBgkqhkiG9w0BAQsFAAOCAQEAW8msIke49KBndVTw1hnY+Y9IGmXqQXKYnK6jXgH0YJ6TqPGoPzBBCZ2KdrTnV9IK9U1xW2oUdj2fgo0iRs5rCbXhAOuxjPKRzvD1BjFqLp1J6gTpvgGlIjksNddVODryz/dfHkVlxRkdRL7KwNqkmhJVZpTuOIrJ6kFsUh1FtEKkTDea8/JuNFRUTTeCFQSNM8o4w+u/8zJg6e5XT1vxfCbI9RrwSfDdEhHvQFjS1kjgNuoFLeS8/NrN9tYzrwN/l8sVPPo73YkALkWvO7M0H9OWfoHeqGFrlOe5VF7RbZTpxohYtXcEBuE0NuTXKaLXwsg5OZLJhFuXToKse0etWg==</ds:X509Certificate></ds:X509Data></KeyInfo></ds:Signature><Subject><SubjectConfirmation Method="urn:oasis:names:tc:SAML:2.0:cm:bearer"><SubjectConfirmationData NotOnOrAfter="2014-08-25T13:31:16.895Z"/></SubjectConfirmation></Subject><Conditions NotBefore="2014-08-25T13:26:16.895Z" NotOnOrAfter="2014-08-25T14:26:16.895Z"><AudienceRestriction><Audience>https://dubdev.com</Audience></AudienceRestriction></Conditions><AttributeStatement><Attribute Name="http://schemas.microsoft.com/ws/2008/06/identity/claims/windowsaccountname"><AttributeValue>vagrant@dubdev.com</AttributeValue></Attribute></AttributeStatement><AuthnStatement AuthnInstant="2014-08-25T13:26:16.895Z"><AuthnContext><AuthnContextClassRef>urn:oasis:names:tc:SAML:2.0:ac:classes:Password</AuthnContextClassRef></AuthnContext></AuthnStatement></Assertion>'

var saml = require('saml20');

saml.parse(rawAssertion, function(err, profile) {
    // err
console.log(err);
    var claims = profile.claims; // Array of user attributes;
    var issuer = profile.issuer; // String Issuer name.

console.log(claims);
console.log(issuer);

});

var options = {
    thumbprint: '1aeabdfa4473ecc7efc5947b18436c575574baf8',
    audience: 'http://myservice.com/'
}

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
