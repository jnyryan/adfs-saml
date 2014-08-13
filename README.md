#adfs-saml

OpenSSL convert DER to pem

	- Export the Self Signed Certificate from the ADFS Server 
	- Convert it to a pem file
	- Copy it to /etc/ssl/certs/ 
	- update the certificate to the certificate bundle

```
openssl x509 -inform der -in ./ssl/vagrant-dc.cer -out ./ssl/vagrant-dc.pem
sudo cp ./ssl/vagrant-dc.pem /etc/ssl/certs/vagrant-dc.pem
sudo update-ca-certificates
```
