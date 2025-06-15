const fileController = require('./fileController');
const { parse } = require('url');

function handleRoutes(req, res) {
    const parsedUrl = parse(req.url, true);
    const pathname = parsedUrl.pathname;
    const method = req.method;
    const query = parsedUrl.query;
    const queryParams = new URLSearchParams(parsedUrl.query);

    if (pathname === '/create' && method === 'POST') {
        fileController.createFile(req, res);
    } else if (pathname === '/read' && method === 'GET') {
        fileController.readFile(req, res, new URLSearchParams(query));
    } else if (pathname === '/delete' && method === 'DELETE') {
        fileController.deleteFile(req, res, new URLSearchParams(query));
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Route not found' }));
    }
}

module.exports = handleRoutes;
