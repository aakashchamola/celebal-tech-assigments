const express = require('express');
const path = require('path');
const app = express();
const PORT = 8000;
const mainRoutes = require('./src/routes/mainRoutes');
// Middleware
const logger = require('./src/middlewares/logger');
const errorHandler = require('./src/middlewares/errorhandler');

app.use(logger);

// Serve static files
app.use(express.static(path.join(__dirname, 'src/public')));

// Set EJS as templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));

// Routes
app.use(express.urlencoded({ extended: true }));

app.use('/', mainRoutes);

app.use(errorHandler);

app.use((req, res) => {
  res.status(404).render('404', { title: '404 - Page Not Found', url: req.originalUrl });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
