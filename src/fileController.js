const fs = require('fs');
const path = require('path');
const { sendJSON } = require('./responseUtils');

const baseDir = path.join(__dirname, '..', 'files');

// Ensure the `files` directory exists
if (!fs.existsSync(baseDir)) {
    fs.mkdirSync(baseDir);
}

exports.createFile = (req, res) => {
    let body = '';

    req.on('data', chunk => {
        body += chunk.toString();
    });

    req.on('end', () => {
        try {
            const { filename, content } = JSON.parse(body);
            const filePath = path.join(baseDir, filename);

            fs.writeFile(filePath, content, (err) => {
                if (err) {
                    sendJSON(res, 500, { message: 'Error creating file' });
                } else {
                    sendJSON(res, 201, { message: 'File created successfully' });
                }
            });
        } catch (err) {
            sendJSON(res, 400, { message: 'Invalid JSON body' });
        }
    });
};

exports.readFile = (req, res, query) => {
    const filename = query.get('filename');

    if (!filename) {
        return sendJSON(res, 400, { message: 'Filename is required' });
    }

    const filePath = path.join(baseDir, filename);

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            sendJSON(res, 404, { message: 'File not found' });
        } else {
            sendJSON(res, 200, { filename, content: data });
        }
    });
};

exports.deleteFile = (req, res, query) => {
    const filename = query.get('filename');

    if (!filename) {
        return sendJSON(res, 400, { message: 'Filename is required' });
    }

    const filePath = path.join(baseDir, filename);

    fs.unlink(filePath, (err) => {
        if (err) {
            sendJSON(res, 404, { message: 'File not found or could not be deleted' });
        } else {
            sendJSON(res, 200, { message: 'File deleted successfully' });
        }
    });
};
