const express = require('express');
const router = express.Router();
const { addUser, getUsers } = require('../utils/userDb');

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

router.get('/form', (req, res) => {
  res.render('form', { title: 'Submit Form' });
});
router.get('/cause-error', (req, res, next) => {
  const error = new Error('This is a simulated server error.');
  error.status = 500;
  next(error);
});
router.get('/users', (req, res) => {
  const users = getUsers();
  res.render('users', { title: 'All Users', users });
});

router.get('/add-user', (req, res) => {
  res.render('addUser', { title: 'Add User' });
});

router.post('/submit', (req, res) => {
  const { name, email } = req.body;
  res.render('thankyou', { title: 'Thanks', name, email });
});


router.post('/add-user', (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).send('Name and Email are required!');
  }

  const newUser = {
    id: Date.now(),
    name,
    email
  };

  addUser(newUser);
  res.redirect('/users');
});

module.exports = router;
