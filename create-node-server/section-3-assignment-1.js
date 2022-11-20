const http = require('http');

// create a new server with the help from http modules from Node.js
const server = http.createServer((req, res) => {
  const { url } = req;

  // run this block when the user visits exactly - http://localhost:3000/
  if (url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write(
      `
        <html>
          <head>
            <title>Hello World!</title>
          </head>
          <body>
            <h1>Hello World!</h1>
            <form action="/create-user" method="POST">
              <input type="text" name="username" />
              <button type="submit">Send</button>
            </form>
          </body>
        </html>
      `
    );
    res.end();
  } else if (url === '/users') {
    // run this block when the user visits exactly - http://localhost:3000/users
    res.setHeader('Content-Type', 'text/html');
    res.write(
      `
        <html>
          <head>
            <title>Hello World!</title>
          </head>
          <body>
            <ul>
              <li>Mango</li>
              <li>Banana</li>
              <li>Orange</li>
            </ul>
          </body>
        </html>
      `
    );
    res.end();
  } else if (url === '/create-user') {
    // run this block when the user visits exactly - http://localhost:3000/create-user
    const body = [];
    req.on('data', (chunk) => {
      body.push(chunk);
    })
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
    })
    res.statusCode = 302;
    res.setHeader('Location', '/');
    res.end();
  }
});

server.listen(3000);