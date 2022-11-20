const http = require('http');

const server = http.createServer((req, res) => {
  // identify route, HTTP method for a request
  const { url, method } = req;
  // setting a response header
  res.setHeader('Content-Type', 'text/html');
  // write response 
  res.write('Hello World!')
  // ending a response
  res.end();
});

server.listen(3000, () => {
  console.log('Listening to port 3000');
});