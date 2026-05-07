const express = require('express');
const router = express.Router();
const newsController = require('../controllers/newsController');

router.get('/', newsController.getAllNews);
router.get('/trending', newsController.getTrending);
router.get('/categories', newsController.getCategories);
router.post('/', newsController.createNews);
router.get('/category/:category', newsController.getByCategory);
router.get('/:id', newsController.getById);

module.exports = router;