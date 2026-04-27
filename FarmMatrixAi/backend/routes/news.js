// filepath: backend/routes/news.js
const express = require('express');
const router = express.Router();
const newsController = require('../controllers/newsController');

// Routes for news

// GET /api/news - Get all news with filters
router.get('/', newsController.getAllNews);

// GET /api/news/categories - Get category filters
router.get('/categories', newsController.getCategories);

// GET /api/news/trending - Get trending news
router.get('/trending', newsController.getTrending);

// GET /api/news/category/:category - Get news by category
router.get('/category/:category', newsController.getByCategory);

// GET /api/news/:id - Get specific news article
router.get('/:id', newsController.getById);

// POST /api/news - Create news article (admin)
router.post('/', newsController.createNews);

module.exports = router;