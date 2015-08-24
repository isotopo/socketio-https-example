mkdir keys
cd keys

# /C=	Country	GB
# /ST=	State	London
# /L=	Location	London
# /O=	Organization	Global Security
# /OU=	Organizational Unit	IT Department
# /CN=	Common Name	example.com

openssl genrsa -out client-key.pem 2048
openssl req -new -sha256 -key client-key.pem -out client-csr.pem  -subj "/C=MX/ST=DF/L=Condesa/O=4yopping/OU=papi-baby/CN=localhost"
openssl x509 -req -in client-csr.pem -signkey client-key.pem -out client-cert.pem
openssl genrsa -out server-key.pem 2048
openssl req -new -sha256 -key server-key.pem -out server-csr.pem  -subj "/C=MX/ST=DF/L=Condesa/O=4yopping/OU=core/CN=localhost"
openssl x509 -req -in server-csr.pem -signkey server-key.pem -out server-cert.pem
openssl genrsa -out unauthorized-client-key.pem 2048
openssl req -new -sha256 -key unauthorized-client-key.pem -out unauthorized-client-csr.pem  -subj "/C=MX/ST=DF/L=Condesa/O=4yopping/OU=papi-baby/CN=localhost"
openssl x509 -req -in unauthorized-client-csr.pem -signkey unauthorized-client-key.pem -out unauthorized-client-cert.pem
