var app = require('express')();
var http = require('http').Server(app);
var port = process.env.PORT || 8080;

app.get('/', function(req, res){
  res.send("HELLO WORLD");
});

http.listen(port, function(){
  console.log('listening on *:' + port');
});