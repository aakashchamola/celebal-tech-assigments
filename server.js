const express = require('express');
const path = require('path');
const app = express();
const PORT = 8000;

// Middleware
const logger = require('./middleware/logger');
app.use(logger);

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Set EJS as templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
const mainRoutes = require('./routes/mainRoutes');
app.use('/', mainRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
