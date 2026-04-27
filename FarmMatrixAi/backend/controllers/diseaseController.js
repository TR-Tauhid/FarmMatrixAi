// filepath: backend/controllers/diseaseController.js
const DiseaseDetection = require('../models/DiseaseDetection');

/**
 * Disease Detection Controller
 * Handles plant disease detection requests and history
 * 
 * MongoDB Integration: Replace mock responses with actual DB operations
 */

// Analyze image for disease detection
exports.analyzeImage = async (req, res) => {
  try {
    // In production, this would process uploaded image
    // For now, accept parameters for testing
    const { imageName, cropType, userId } = req.body;

    // MongoDB placeholder - replace with:
    // const detection = await DiseaseDetection.create({ ... });
    
    // Mock AI response for now
    const mockAnalysis = {
      diseaseName: "Leaf Blight",
      confidence: 0.94,
      severity: "medium",
      description: "A fungal disease that causes brown lesions on leaves, leading to reduced photosynthesis and yield loss if untreated.",
      treatment: "1. Apply copper-based fungicide\n2. Remove infected leaves\n3. Improve air circulation\n4. Avoid overhead watering",
      prevention: "1. Use disease-resistant varieties\n2. Practice crop rotation\n3. Maintain proper spacing\n4. Monitor field regularly",
      affectedParts: ["Leaves", "Stems"],
      additionalInfo: {
        spreadConditions: "Warm, humid weather (25-30°C)",
        economicImpact: "Can cause 20-40% yield loss if untreated"
      }
    };

    res.status(200).json({
      success: true,
      message: "Disease analysis completed successfully (MongoDB placeholder)",
      data: {
        imageName,
        cropType,
        ...mockAnalysis,
        timestamp: new Date().toISOString()
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error analyzing image",
      error: error.message
    });
  }
};

// Get user's disease detection history
exports.getHistory = async (req, res) => {
  try {
    const { userId } = req.params;
    const { limit = 10 } = req.query;
    
    // MongoDB placeholder - replace with:
    // const history = await DiseaseDetection.getHistory(userId, parseInt(limit));
    
    res.status(200).json({
      success: true,
      message: "History fetched successfully (MongoDB placeholder)",
      data: {
        userId,
        detections: [],
        total: 0
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching history",
      error: error.message
    });
  }
};

// Get a specific detection by ID
exports.getById = async (req, res) => {
  try {
    const { id } = req.params;
    
    // MongoDB placeholder - replace with:
    // const detection = await DiseaseDetection.findById(id);
    
    res.status(200).json({
      success: true,
      message: "Detection fetched successfully (MongoDB placeholder)",
      data: {
        id,
        diseaseName: null,
        confidence: null
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching detection",
      error: error.message
    });
  }
};

// Delete a detection record
exports.deleteDetection = async (req, res) => {
  try {
    const { id } = req.params;
    
    // MongoDB placeholder - replace with:
    // await DiseaseDetection.delete(id);
    
    res.status(200).json({
      success: true,
      message: "Detection deleted successfully (MongoDB placeholder)"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error deleting detection",
      error: error.message
    });
  }
};