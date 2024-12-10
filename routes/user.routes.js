const express = require('express');
const router = express.Router();
const { updateUser } = require('../controllers/user.controller');
const authMiddleware = require('../middleware/auth.middleware'); // Assuming you have an auth middleware

router.put('/:id/updateUser', authMiddleware, updateUser);  // Added the ID as a route parameter

module.exports = router;
