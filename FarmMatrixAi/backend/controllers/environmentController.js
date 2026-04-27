// filepath: backend/controllers/environmentController.js
const Environment = require('../models/Environment');

/**
 * Environment Controller
 * Handles soil, weather, and environmental data
 * 
 * MongoDB Integration: Replace mock responses with actual DB operations
 */

// Get environmental data for a location
exports.getEnvironmentData = async (req, res) => {
  try {
    const { latitude, longitude, region } = req.body;

    // MongoDB placeholder - replace with:
    // const envData = await Environment.findOne({ location: { latitude, longitude } });
    
    // Mock response for now
    const mockSoilData = {
      soilType: "Loamy",
      ph: 6.5,
      nitrogen: "medium",
      phosphorus: "high",
      potassium: "medium",
      organicMatter: 2.5,
      moisture: 45,
      temperature: 28,
      texture: "Sandy loam"
    };

    const mockWeatherData = {
      current: {
        temperature: 32,
        humidity: 65,
        rainfall: 0,
        windSpeed: 12,
        condition: "Sunny"
      },
      forecast: [
        { day: "Monday", high: 34, low: 24, condition: "Sunny", humidity: 60 },
        { day: "Tuesday", high: 32, low: 23, condition: "Partly Cloudy", humidity: 70 },
        { day: "Wednesday", high: 30, low: 22, condition: "Rainy", humidity: 85 },
        { day: "Thursday", high: 28, low: 21, condition: "Rainy", humidity: 90 },
        { day: "Friday", high: 30, low: 22, condition: "Cloudy", humidity: 75 },
        { day: "Saturday", high: 32, low: 23, condition: "Sunny", humidity: 65 },
        { day: "Sunday", high: 33, low: 24, condition: "Sunny", humidity: 60 }
      ]
    };

    res.status(200).json({
      success: true,
      message: "Environment data fetched successfully (MongoDB placeholder)",
      data: {
        location: { latitude, longitude, region },
        soilProfile: mockSoilData,
        weather: mockWeatherData,
        timestamp: new Date().toISOString()
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching environment data",
      error: error.message
    });
  }
};

// Get soil health summary
exports.getSoilHealth = async (req, res) => {
  try {
    const { region } = req.params;

    // MongoDB placeholder
    
    res.status(200).json({
      success: true,
      message: "Soil health data fetched successfully (MongoDB placeholder)",
      data: {
        region,
        overallHealth: "Good",
        ph: 6.5,
        nitrogen: "Medium (150 kg/ha)",
        phosphorus: "High (45 kg/ha)",
        potassium: "Medium (280 kg/ha)",
        organicMatter: "2.5%",
        recommendations: [
          "Consider adding nitrogen fertilizer for next crop",
          "Soil pH is optimal for most crops",
          "Organic matter content can be improved with compost"
        ]
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching soil health",
      error: error.message
    });
  }
};

// Get weather summary
exports.getWeatherSummary = async (req, res) => {
  try {
    const { region } = req.params;

    res.status(200).json({
      success: true,
      message: "Weather summary fetched successfully (MongoDB placeholder)",
      data: {
        region,
        current: {
          temperature: 32,
          humidity: 65,
          condition: "Sunny"
        },
        weeklyForecast: [
          { day: "Mon", high: 34, low: 24, condition: "Sunny" },
          { day: "Tue", high: 32, low: 23, condition: "Cloudy" },
          { day: "Wed", high: 30, low: 22, condition: "Rain" },
          { day: "Thu", high: 28, low: 21, condition: "Rain" },
          { day: "Fri", high: 30, low: 22, condition: "Cloudy" },
          { day: "Sat", high: 32, low: 23, condition: "Sunny" },
          { day: "Sun", high: 33, low: 24, condition: "Sunny" }
        ]
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching weather summary",
      error: error.message
    });
  }
};

// Get environmental history
exports.getHistory = async (req, res) => {
  try {
    const { userId } = req.params;
    const { days = 7 } = req.query;

    res.status(200).json({
      success: true,
      message: "Environment history fetched successfully (MongoDB placeholder)",
      data: {
        userId,
        days,
        history: []
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching environment history",
      error: error.message
    });
  }
};

// Save environmental data
exports.saveData = async (req, res) => {
  try {
    const data = req.body;

    // MongoDB placeholder - replace with:
    // const envData = await Environment.create(data);

    res.status(201).json({
      success: true,
      message: "Environment data saved successfully (MongoDB placeholder)",
      data
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error saving environment data",
      error: error.message
    });
  }
};