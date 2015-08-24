'use strict';

var fs = require('fs'),
	io = require('socket.io-client'),
	socket = io.connect('https://localhost:8080', {
		reconnect: true,
		key: fs.readFileSync('keys/unauthorized-client-key.pem'),
		cert: fs.readFileSync('keys/unauthorized-client-cert.pem'),
		ca: [fs.readFileSync('keys/server-cert.pem')]
	});


socket.on('connect', function() {
	console.log('Connected!');
});


socket.emit('ping', Date.now());

socket.on('pong', function(data) {
	console.log('Pong: %s',data);
	socket.emit('ping', Date.now());
});


socket.on('disconnect', function(e) {
	console.log('disconnect');
	console.log(e);
});
