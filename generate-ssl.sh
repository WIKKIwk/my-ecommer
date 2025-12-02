#!/bin/bash
mkdir -p certs
openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
  -keyout certs/privkey.pem \
  -out certs/fullchain.pem \
  -subj "/C=UZ/ST=Toshkent/L=Toshkent/O=MyEcommer/OU=IT/CN=taomchi.app"
chmod 644 certs/*.pem
echo "✅ Self-signed certificates generated in ./certs/"
