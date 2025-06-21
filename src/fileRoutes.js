// File: src/fileRoutes.js
const fileController = require('./fileController');
const { parse } = require('url');

function handleRoutes(req, res) {
    const parsedUrl = parse(req.url, true);
    const pathname = parsedUrl.pathname;
    const method = req.method;
    const query = new URLSearchParams(parsedUrl.query);

    if (pathname === '/create' && method === 'POST') {
        fileController.createFile(req, res);
    } else if (pathname === '/read' && method === 'GET') {
        fileController.readFile(req, res, query);
    } else if (pathname === '/delete' && method === 'DELETE') {
        fileController.deleteFile(req, res, query);
    } 
    else if (pathname === '/copyAndRename' && method === 'POST') {
  fileController.copyAndRename(req, res);
} else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Route not found' }));
    }
}

module.exports = handleRoutes;
