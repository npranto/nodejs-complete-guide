const http = require('http');

const server = http.createServer((req, res) => {
  console.log('Welcome to your server!');
});

server.listen(3000);