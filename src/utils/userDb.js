const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, '..', 'data', 'users.json');

function getUsers() {
  const data = fs.readFileSync(dbPath, 'utf8');
  return JSON.parse(data);
}

function addUser(user) {
  const users = getUsers();
  users.push(user);
  fs.writeFileSync(dbPath, JSON.stringify(users, null, 2), 'utf8');
}

module.exports = { getUsers, addUser };
