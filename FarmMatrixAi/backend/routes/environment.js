// filepath: backend/routes/environment.js
const express = require('express');
const router = express.Router();
const environmentController = require('../controllers/environmentController');

// Routes for environment data (soil, weather)

// POST /api/environment - Get environmental data
router.post('/', environmentController.getEnvironmentData);

// GET /api/environment/soil/:region - Get soil health summary
router.get('/soil/:region', environmentController.getSoilHealth);

// GET /api/environment/weather/:region - Get weather summary
router.get('/weather/:region', environmentController.getWeatherSummary);

// GET /api/environment/history/:userId - Get environmental history
router.get('/history/:userId', environmentController.getHistory);

// POST /api/environment/save - Save environmental data
router.post('/save', environmentController.saveData);

module.exports = router;