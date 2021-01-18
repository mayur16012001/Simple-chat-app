var http = require('http')
var express = require('express')
var socketio = require('socket.io')

var app= express()
var server = http.createServer(app)
var io = socketio(server)

io.on('connection',function(socket){
    console.log('A user is connected')

    socket.on('client msg',function(msg){
        io.emit('server msg',msg)
    })
})

app.use(express.static('public'))

server.listen(3000,function(){
    console.log('server starte at Port :: 3000')
})