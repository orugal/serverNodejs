// importar
var express = require('express');
var app 	= express();
var http 	= require('http').Server(app);
var io 		= require('socket.io')(http);
 
// ruteo
app.get('/', function(req, res){
  res.sendfile(__dirname + '/public/index.html');
});

app.get('/chat', function(req, res){
  res.sendfile(__dirname + '/public/index.html');
});

io.on('connection',function(socket){
	console.log("Un usuario se ha conectado..");

	socket.on('disconnect',function(){
		console.log("Un usuario se ha desconectado..");
	});

	socket.on('mensaje del chat',function(msg){
		io.emit('mensaje del chat', msg);
	})

	socket.on('conectado',function(msg){
		io.emit('conectado',msg);
	})
});
 
// escuchar
http.listen(80,function(){
	console.log("Servidor Express escuchando en modo %s", app.settings.env);
});
     