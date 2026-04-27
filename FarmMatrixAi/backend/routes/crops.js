// filepath: backend/routes/crops.js
const express = require('express');
const router = express.Router();
const cropController = require('../controllers/cropController');

// Routes for crop recommendations

// POST /api/crops/recommend - Get crop recommendations
router.post('/recommend', cropController.getRecommendations);

// GET /api/crops/history/:userId - Get user's crop recommendation history
router.get('/history/:userId', cropController.getHistory);

// GET /api/crops/:id - Get specific recommendation
router.get('/:id', cropController.getById);

// DELETE /api/crops/:id - Delete a recommendation
router.delete('/:id', cropController.deleteRecommendation);

module.exports = router;