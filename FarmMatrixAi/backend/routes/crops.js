const express = require('express');
const router = express.Router();
const CropRecommendation = require('../models/CropRecommendation');
const { GoogleGenerativeAI } = require('@google/generative-ai');

// @route   POST /api/crops/recommend
// @desc    Get crop recommendations based on soil/weather
router.post('/recommend', async (req, res) => {
  try {
    const userId = req.user ? req.user.id : "65a12345b678901234567890"; 
    const { soilType, climate, season, rainfall, temperature, location } = req.body;

    if (!process.env.GEMINI_API_KEY) {
        return res.status(500).json({ success: false, message: "AI API Key missing on server." });
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
    const prompt = `Act as an expert agronomist AI (Random Forest simulation). Based on these conditions: 
    Soil: ${soilType}, Climate: ${climate}, Season: ${season}, Rainfall: ${rainfall}mm, Temp: ${temperature}°C. 
    Suggest the 3 best crops. Return ONLY a valid JSON array of objects (no markdown, no backticks) where each object has these exact keys: 
    cropName (string), confidence (number between 0.0 and 1.0), expectedYield (number), growthPeriod (string), waterRequirement (string), soilPH (string).`;
    
    const result = await model.generateContent(prompt);
    const responseText = result.response.text().replace(/```json/gi, '').replace(/```/g, '').trim();
    
    const recommendedCrops = JSON.parse(responseText);

    const newRec = new CropRecommendation({
      userId,
      soilType, climate, season, rainfall, temperature, location,
      recommendedCrops
    });

    const savedData = await newRec.save();
    res.status(200).json({ success: true, data: savedData });
  } catch (error) {
    console.error("Crop API Error:", error);
    res.status(500).json({ success: false, message: "Server Error while generating crop recommendation" });
  }
});

// @route   GET /api/crops/history/:userId
// @desc    Fetch user's recommendation history
router.get('/history/:userId', async (req, res) => {
    const history = await CropRecommendation.find({ userId: req.params.userId }).sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: history });
});

module.exports = router;