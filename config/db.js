const mysql = require('mysql2');

// Create a connection pool
const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: '',
});

db.getConnection((err, connection) => {
  if (err) {
    console.error('Database connection failed:', err.message);
  } else {
    console.log('Connected to MySQL database');
    connection.release();
  }
});

module.exports = db.promise(); // Export promise-based connection

1. //Post Url: http://localhost:5000/api/users/signup

// {
//   "name": "Mohan Doe",
//   "email": "mohan@example.com",
//   "phone": "1234567890",
//   "password": "12345"
// }

2.//Get Url : http://localhost:5000/api/users/getUser
// {
//   "email": "john@example.com"
// }