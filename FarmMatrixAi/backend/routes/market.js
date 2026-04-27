// filepath: backend/routes/market.js
const express = require('express');
const router = express.Router();
const marketController = require('../controllers/marketController');

// Routes for market data

// GET /api/market/overview - Get market overview
router.get('/overview', marketController.getMarketOverview);

// GET /api/market/trends - Get market trends
router.get('/trends', marketController.getTrends);

// GET /api/market/sentiment - Get market sentiment
router.get('/sentiment', marketController.getSentiment);

// GET /api/market/performance/:commodity - Get performance metrics
router.get('/performance/:commodity', marketController.getPerformanceMetrics);

// GET /api/market/analysis - Get trend analysis chart data
router.get('/analysis', marketController.getTrendAnalysis);

module.exports = router;