const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'Home Page' });
});

router.get('/about', (req, res) => {
  res.render('about', { title: 'About Page' });
});

router.get('/greet', (req, res) => {
  const name = req.query.name || 'Guest';
  res.send(`Hello, ${name}!`);
});

router.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`User Profile for ID: ${userId}`);
});

module.exports = router;
