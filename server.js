'use strict';

// Self-signed certificate
process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;

var fs = require('fs'),
	io = require('socket.io'),
	server = require('https').createServer({
		key: fs.readFileSync('keys/server-key.pem'),
		cert: fs.readFileSync('keys/server-cert.pem'),
		ca: [fs.readFileSync('keys/client-cert.pem')],
		requestCert: true,
		rejectUnauthorized: true
	}),
	port = process.env.PORT || 8080;

io = io(server);

io.on('connection', function(socket) {
	console.log('On connection');

	socket.on('ping', function(data) {
		console.log('Ping: %s', data);
		socket.emit('pong', Date.now());
	});

});


server.listen(port, function() {
	console.log('Socket is listening at: %s', port);
});

io = io.listen(server);
