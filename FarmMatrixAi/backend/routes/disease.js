// filepath: backend/routes/disease.js
const express = require('express');
const router = express.Router();
const diseaseController = require('../controllers/diseaseController');

// Routes for disease detection

// POST /api/disease/analyze - Analyze image for disease
router.post('/analyze', diseaseController.analyzeImage);

// GET /api/disease/history/:userId - Get user's disease detection history
router.get('/history/:userId', diseaseController.getHistory);

// GET /api/disease/:id - Get specific detection
router.get('/:id', diseaseController.getById);

// DELETE /api/disease/:id - Delete a detection record
router.delete('/:id', diseaseController.deleteDetection);

module.exports = router;