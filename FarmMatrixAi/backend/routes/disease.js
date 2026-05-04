const express = require('express');
const router = express.Router();
const multer = require('multer');
const DiseaseDetection = require('../models/DiseaseDetection');
const { GoogleGenerativeAI } = require('@google/generative-ai');

// Use memoryStorage so Render doesn't delete the images upon server sleep
const upload = multer({ storage: multer.memoryStorage() });

// @route   POST /api/disease/analyze
// @desc    Analyze plant leaf image for diseases
router.post('/analyze', upload.single('image'), async (req, res) => {
  try {
    const userId = req.user ? req.user.id : "65a12345b678901234567890"; // Replace with auth later
    
    if (!req.file) {
      return res.status(400).json({ success: false, message: "Please upload an image" });
    }

    if (!process.env.GEMINI_API_KEY) {
        return res.status(500).json({ success: false, message: "AI API Key missing on server." });
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
    const imageParts = [{
      inlineData: {
        data: req.file.buffer.toString("base64"),
        mimeType: req.file.mimetype
      }
    }];

    // Force AI to return data that perfectly matches our Mongoose schema
    const prompt = `Analyze this plant leaf image. Identify the disease. Return ONLY a raw JSON object (no markdown formatting, no backticks) with these exact keys: diseaseName (string), confidence (number 0.0 to 1.0), severity ('low', 'medium', or 'high'), description (string), treatment (string), prevention (string), affectedParts (array of strings), cropType (string).`;
    
    const result = await model.generateContent([prompt, ...imageParts]);
    
    // Clean up response in case AI adds markdown code blocks
    const responseText = result.response.text().replace(/```json/gi, '').replace(/```/g, '').trim();
    const diseaseInfo = JSON.parse(responseText);

    // Save to MongoDB
    const newDetection = new DiseaseDetection({
      userId,
      imageUrl: "data:" + req.file.mimetype + ";base64," + req.file.buffer.toString("base64"), // Save base64 directly or replace with Cloudinary URL later
      imageName: req.file.originalname,
      ...diseaseInfo
    });

    const savedDetection = await newDetection.save();
    res.status(200).json({ success: true, data: savedDetection });

  } catch (error) {
    console.error("Disease API Error:", error);
    res.status(500).json({ success: false, message: "Failed to analyze image" });
  }
});

module.exports = router;