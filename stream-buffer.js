const http = require('http');

//creating a server using raw node.js
const server = http.createServer();

server.on('request', (req, res) => {
    console.log(req);
    res.end('Hello from world!');
});

server.listen(5000, () => {
    console.log('server listening on port 5000');
})