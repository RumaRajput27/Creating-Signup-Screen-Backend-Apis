const express = require('express');
const { signup, getUserByEmail } = require('../controllers/userController');

const router = express.Router();

router.post('/signup', signup);
router.get('/getUser', express.json(), getUserByEmail);

module.exports = router;
