const express = require("express");
const router = express.Router();
const multer = require("multer");
const DiseaseDetection = require("../models/DiseaseDetection");

// Store image in memory
const upload = multer({
  storage: multer.memoryStorage(),
});

// @route   POST /api/disease/analyze
// @desc    Analyze plant leaf image for diseases
router.post("/analyze", upload.single("image"), async (req, res) => {
  try {
    // Firebase/Auth user ID
    const userId =
      req.body.userId || req.user?.uid || req.user?.id || req.user?._id || null;

    // Validate image
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Please upload an image",
      });
    }

    // Validate API key
    if (!process.env.GROQ_API_KEY) {
      return res.status(500).json({
        success: false,
        message: "Groq API Key missing on server",
      });
    }

    // Prompt
    const prompt = `
Analyze this plant leaf image carefully.

Identify:
- Disease name
- Confidence score
- Severity
- Description
- Treatment
- Prevention
- Affected plant parts
- Crop type

Return ONLY a valid raw JSON object.

Do NOT use markdown.
Do NOT use backticks.

Required JSON format:

{
  "diseaseName": "string",
  "confidence": 0.95,
  "severity": "low",
  "description": "string",
  "treatment": "string",
  "prevention": "string",
  "affectedParts": ["leaf"],
  "cropType": "string"
}
`;

    // Convert image to base64
    const base64Image = `data:${
      req.file.mimetype
    };base64,${req.file.buffer.toString("base64")}`;

    // Call Groq Vision API
    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "meta-llama/llama-4-scout-17b-16e-instruct",

          messages: [
            {
              role: "user",
              content: [
                {
                  type: "text",
                  text: prompt,
                },
                {
                  type: "image_url",
                  image_url: {
                    url: base64Image,
                  },
                },
              ],
            },
          ],

          temperature: 0.1,
          max_tokens: 1024,
        }),
      },
    );

    // Handle API failure
    if (!response.ok) {
      const errorText = await response.text();

      console.error("Groq API Error:", errorText);

      return res.status(500).json({
        success: false,
        message: "Failed to communicate with Groq API",
        error: errorText,
      });
    }

    // Parse Groq response
    const result = await response.json();

    // Extract AI response text
    const rawText = result?.choices?.[0]?.message?.content;

    if (!rawText) {
      return res.status(500).json({
        success: false,
        message: "AI returned empty response",
      });
    }

    // Clean response
    const cleanedText = rawText
      .replace(/```json/gi, "")
      .replace(/```/g, "")
      .trim();

    // Parse JSON safely
    let diseaseInfo;

    try {
      diseaseInfo = JSON.parse(cleanedText);
    } catch (parseError) {
      console.error("JSON Parse Error:");
      console.error(cleanedText);

      return res.status(500).json({
        success: false,
        message: "AI returned invalid JSON format",
      });
    }

    // Create database document
    const newDetection = new DiseaseDetection({
      userId: userId || "anonymous",

      imageUrl: base64Image,
      imageName: req.file.originalname,

      diseaseName: diseaseInfo.diseaseName || "Unknown Disease",

      confidence: Number(diseaseInfo.confidence) || 0,

      severity:
        diseaseInfo.severity?.toLowerCase() === "moderate"
          ? "medium"
          : ["low", "medium", "high"].includes(
                diseaseInfo.severity?.toLowerCase(),
              )
            ? diseaseInfo.severity.toLowerCase()
            : "medium",

      description: diseaseInfo.description || "",

      treatment: diseaseInfo.treatment || "",

      prevention: diseaseInfo.prevention || "",

      affectedParts: Array.isArray(diseaseInfo.affectedParts)
        ? diseaseInfo.affectedParts
        : [],

      cropType: diseaseInfo.cropType || "Unknown",
    });

    // Save to MongoDB
    const savedDetection = await newDetection.save();

    // Success response
    return res.status(200).json({
      success: true,
      data: savedDetection,
    });
  } catch (error) {
    console.error("Disease API Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to analyze image",
      error: error.message,
    });
  }
});

module.exports = router;
