const db = require('../config/db');

const User = {
  findByEmail: (email) => {
    return db.query('SELECT * FROM users WHERE email = ?', [email]);
  },

  create: (userData) => {
    const { name, email, phone, password } = userData;
    return db.query(
      'INSERT INTO users (name, email, phone, password) VALUES (?, ?, ?, ?)',
      [name, email, phone, password]
    );
  },
};

module.exports = User;
