// File: src/fileController.js
const fs = require('fs').promises; // <-- use promises version
const path = require('path');
const { sendJSON } = require('./responseUtils');

const baseDir = path.join(__dirname, '..', 'files');

// Ensure the `files` directory exists (sync is fine here since it's one-time setup)
const fsSync = require('fs');
if (!fsSync.existsSync(baseDir)) {
    fsSync.mkdirSync(baseDir);
}

exports.createFile = async (req, res) => {
    try {
        let body = '';

        for await (const chunk of req) {
            body += chunk.toString();
        }

        const { filename, content } = JSON.parse(body);
        const filePath = path.join(baseDir, filename);

        await fs.writeFile(filePath, content);

        sendJSON(res, 201, { message: 'File created successfully' });
    } catch (error) {
        console.error(error);
        sendJSON(res, 500, { message: error.message || 'Error creating file' });
    }
};

exports.readFile = async (req, res, query) => {
    try {
        const filename = query.get('filename');

        if (!filename) {
            return sendJSON(res, 400, { message: 'Filename is required' });
        }

        const filePath = path.join(baseDir, filename);
        const data = await fs.readFile(filePath, 'utf8');

        sendJSON(res, 200, { filename, content: data });
    } catch (error) {
        console.error(error);
        sendJSON(res, 404, { message: 'File not found' });
    }
};

exports.deleteFile = async (req, res, query) => {
    try {
        const filename = query.get('filename');

        if (!filename) {
            return sendJSON(res, 400, { message: 'Filename is required' });
        }

        const filePath = path.join(baseDir, filename);
        await fs.unlink(filePath);

        sendJSON(res, 200, { message: 'File deleted successfully' });
    } catch (error) {
        console.error(error);
        sendJSON(res, 404, { message: 'File not found or could not be deleted' });
    }
};
exports.copyAndRename = (req, res) => {
  let body = '';

  req.on('data', chunk => {
    body += chunk.toString();
  });

  req.on('end', () => {
    const { source, destination } = JSON.parse(body);
    const srcPath = path.join(baseDir, source);
    const destPath = path.join(baseDir, destination);

    console.log('Event Loop Demo: 1 - Start');

    fs.copyFile(srcPath, destPath)
      .then(() => {
        console.log('Event Loop Demo: 2 - File copied');
        return fs.unlink(srcPath);
      })
      .then(() => {
        console.log('Event Loop Demo: 3 - Original file deleted');
        sendJSON(res, 200, { message: 'File copied and original deleted successfully' });
      })
      .catch((err) => {
        console.error('Event Loop Demo: Error occurred', err);
        sendJSON(res, 500, { message: 'Error in copy and rename: ' + err.message });
      });

    console.log('Event Loop Demo: 4 - After starting promise chain');
  });
};
