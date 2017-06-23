// var app = require('express')();
// var https = require('https').Server(app);
// var Redis = require('ioredis');
// var redis = new Redis();
// var fs = require('fs');
//
// var options = {
//     key:    fs.readFileSync('encryption/private.key'),
//     cert:   fs.readFileSync('encryption/rtn-app.com.csr')
//     // ca:     fs.readFileSync('encryption/rtn-app.com.crt')
// };
//
//
// redis.subscribe('test-channel', function(err, count) {
// });
// redis.on('message', function(channel, message) {
//     console.log('Message Recieved: ' + message);
//     message = JSON.parse(message);
//     io.emit(channel + ':' + message.event, message.data);
// });
//
//
// var application = https.createServer(options);
// io = require('socket.io').listen(application);     //socket.io server listens to https connections
// application.listen(3000, function(){
//     console.log('Listening on Port 3000');
// });

// http.listen(3000, function(){
//     console.log('Listening on Port 3000');
// });


var express = require('express');
var app = express();
var fs = require('fs');

var https = require('https');

var Redis = require('ioredis');
var redis = new Redis();


var options = {
    key:    fs.readFileSync('encryption/private.key'),
    cert:   fs.readFileSync('encryption/rtn-app.com.crt')
    // ca:     fs.readFileSync('encryption/rtn-app.com.crt')
};

redis.subscribe('test-channel', function(err, count) {
});
redis.on('message', function(channel, message) {
    console.log('Message Recieved: ' + message);
    console.log('kakaka', options.cert);
    message = JSON.parse(message);
    io.emit(channel + ':' + message.event, message.data);
});

var application = https.createServer(options, app);
io = require('socket.io').listen(application);     //socket.io server listens to https connections
application.listen(3000, function(){
    console.log('Listening on Port 3000');
});