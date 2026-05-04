const express = require('express');
const router = express.Router();
const Environment = require('../models/Environment');

// @route   POST /api/environment
// @desc    Save new environmental data
router.post('/', async (req, res, next) => {
  try {
    // Note: Once your auth middleware is ready, you'll use req.user.id
    // For now, we'll assign a placeholder User ID for testing purposes
    const userId = req.user ? req.user.id : "65a12345b678901234567890"; 
    
    const newEnvironment = new Environment({
      userId,
      ...req.body
    });

    const savedData = await newEnvironment.save();
    res.status(201).json({ success: true, data: savedData });
  } catch (error) {
    console.error("Error saving environment data:", error);
    res.status(500).json({ success: false, message: "Failed to save environmental data" });
  }
});

// @route   GET /api/environment/history
// @desc    Get user's environmental history
router.get('/history', async (req, res, next) => {
  try {
    const userId = req.user ? req.user.id : "65a12345b678901234567890"; 
    
    // Fetch history, sorted by newest first, limited to the last 10 entries
    const history = await Environment.find({ userId }).sort({ createdAt: -1 }).limit(10);
    
    res.status(200).json({ success: true, data: history });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to fetch history" });
  }
});

module.exports = router;