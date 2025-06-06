const http = require('http');

// Creating the server
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
});

// Defining the port and starting the server
const PORT = 8000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});