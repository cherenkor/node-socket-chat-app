var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app).listen(3000);
var io = require('socket.io')(server)

app.use(express.static('./public'))

io.on('connection', function(socket){

  socket.on('chat', function(message){
    socket.broadcast.emit('message', message)
  })

  socket.emit('Welcome to the Cyber Chat')

  console.log('Socket server is on');
})
