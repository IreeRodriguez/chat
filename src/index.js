var app = require('express')();
var http = require('http').Server(app);
var express = require('express');
var io = require('socket.io')(http);

var path = require('path');

app.get('/', function (req, res) {
    res.sendFile('index.html', { root: path.join(__dirname, '../') });

});

app.use(express.static('assets'));

http.listen(3000, function () {
    console.log('listening on *:3000');
});

var express = require('express');
app.use(express.static('assets'));

io.on('connection', function(socket){
    socket.on('disconnect', function(msg){
        io.emit('chat message', msg);
    });
});

http.listen(3000, function () {
    console.log('listening on *:3000');
});

