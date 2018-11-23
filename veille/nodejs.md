#nodejs
apparu en 2009 et cree par ryan dahl
c'est du javascript qui s'applique coter serveur. 
var http = require('http');

## exemple de code node js

var server = http.createServer(function(req, res) {
  res.writeHead(200);
  res.end('Salut tout le monde !');
});
server.listen(8080);