// filepath: backend/routes/auth.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Routes for authentication and user profile

// GET /api/auth/profile/:firebaseUid - Get user profile
router.get('/profile/:firebaseUid', authController.getProfile);

// POST /api/auth/profile - Create new user profile
router.post('/profile', authController.createProfile);

// PUT /api/auth/profile/:firebaseUid - Update user profile
router.put('/profile/:firebaseUid', authController.updateProfile);

// DELETE /api/auth/profile/:firebaseUid - Delete user profile
router.delete('/profile/:firebaseUid', authController.deleteProfile);

// POST /api/auth/verify - Verify Firebase token
router.post('/verify', authController.verifyToken);

module.exports = router;