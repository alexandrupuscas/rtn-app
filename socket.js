var app = require('express')();
var https = require('https').Server(app);
var io = require('socket.io')(https);
var Redis = require('ioredis');
var redis = new Redis();

redis.subscribe('test-channel', function(err, count) {
});
redis.on('message', function(channel, message) {
    console.log('Message Received: ' + message);
    message = JSON.parse(message);
    io.emit(channel + ':' + message.event, message.data);
});
https.listen(3000, function(){
    console.log('Listening on Port 3000');
});