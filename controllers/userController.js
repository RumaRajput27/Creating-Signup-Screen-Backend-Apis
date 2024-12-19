const bcrypt = require('bcryptjs');
const User = require('../models/userModel');

exports.signup = async (req, res) => {
  const { name, email, phone, password } = req.body;

  // Validate input
  if (!name || !email || !phone || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    // Check if the user already exists
    const [existingUser] = await User.findByEmail(email);
    if (existingUser.length > 0) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Encrypt the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    await User.create({ name, email, phone, password: hashedPassword });

    // Success response
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


exports.getUserByEmail = async (req, res) => {
  const { email } = req.body; // Accept email from the JSON body

  // Validate input
  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  try {
    // Fetch the user by email
    const [user] = await User.findByEmail(email);

    if (user.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Return user details (excluding password for security)
    const { name, email: userEmail, phone, created_at } = user[0];
    res.status(200).json({ name, email: userEmail, phone, created_at });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
