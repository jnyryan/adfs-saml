#!/bin/bash

curl https://vagrant-dc.contoso.com/adfs/services/trust/13/usernamemixed \
-k \
--data @request.txt \
-H "Content-Type:application/soap+xml"  \
--verbose \
| xml_pp \
| tee "output.txt"

