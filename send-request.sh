#!/bin/bash

curl https://dubdevdc.dubdev.com/adfs/services/trust/13/usernamemixed \
-k \
--data @xml/request-token.xml \
-H "Content-Type:application/soap+xml"  \
--verbose \
| tee "xml/response-token.xml"

exit

curl https://vagrant-dc.contoso.com/adfs/services/trust/13/usernamemixed \
-k \
--data @xml/request-token.xml \
-H "Content-Type:application/soap+xml"  \
--verbose \
| xml_pp \
| tee "xml/response-token.xml"
