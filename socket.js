//--------------HTTP-----------------
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var Redis = require('ioredis');
var redis = new Redis();
redis.subscribe('test-channel', function(err, count) {
});
redis.on('message', function(channel, message) {
    console.log('Message Received: ' + message);
    message = JSON.parse(message);
    io.emit(channel + ':' + message.event, message.data);
});
http.listen(3000, function(){
    console.log('Listening on Port 3000');
});

//---------HTTPS--------------------
// var express = require('express');
// var app = express();
// var fs = require('fs');
//
// var https = require('https');
//
// var Redis = require('ioredis');
// var redis = new Redis();
//
//
// var options = {
//     key:    fs.readFileSync('encryption/private.key'),
//     cert:   fs.readFileSync('encryption/rtn-app.com.crt')
//     // ca:     fs.readFileSync('encryption/rtn-app.com.crt')
// };
//
// redis.subscribe('test-channel', function(err, count) {
// });
// redis.on('message', function(channel, message) {
//     console.log('Message Received: ' + message);
//     console.log('kakaka', options.cert);
//     message = JSON.parse(message);
//     io.emit(channel + ':' + message.event, message.data);
// });
//
// var application = https.createServer(options, app);
// io = require('socket.io').listen(application);     //socket.io server listens to https connections
// application.listen(3000, function(){
//     console.log('Listening on Port 3000');
// });