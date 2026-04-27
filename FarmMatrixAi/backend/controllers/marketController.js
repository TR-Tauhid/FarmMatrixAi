// filepath: backend/controllers/marketController.js
const Market = require('../models/Market');

/**
 * Market Controller
 * Handles market data, trends, and price information
 * 
 * MongoDB Integration: Replace mock responses with actual DB operations
 */

// Get all market data
exports.getMarketOverview = async (req, res) => {
  try {
    const { category } = req.query;

    // MongoDB placeholder - replace with:
    // const markets = await Market.findAll({ category });
    
    // Mock market data
    const mockMarketData = [
      {
        commodity: "Wheat",
        category: "Grains",
        price: { current: 285, previous: 280, change: 5, changePercent: 1.79 },
        trend: "bullish",
        sentiment: "positive"
      },
      {
        commodity: "Rice",
        category: "Grains",
        price: { current: 320, previous: 325, change: -5, changePercent: -1.54 },
        trend: "bearish",
        sentiment: "neutral"
      },
      {
        commodity: "Cotton",
        category: "Fiber",
        price: { current: 450, previous: 445, change: 5, changePercent: 1.12 },
        trend: "bullish",
        sentiment: "positive"
      },
      {
        commodity: "Soybeans",
        category: "Oilseeds",
        price: { current: 520, previous: 515, change: 5, changePercent: 0.97 },
        trend: "bullish",
        sentiment: "positive"
      },
      {
        commodity: "Corn",
        category: "Grains",
        price: { current: 245, previous: 248, change: -3, changePercent: -1.21 },
        trend: "neutral",
        sentiment: "neutral"
      }
    ];

    res.status(200).json({
      success: true,
      message: "Market overview fetched successfully (MongoDB placeholder)",
      data: {
        markets: mockMarketData,
        lastUpdated: new Date().toISOString()
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching market overview",
      error: error.message
    });
  }
};

// Get market trends
exports.getTrends = async (req, res) => {
  try {
    const { period = "week" } = req.query;

    // MongoDB placeholder
    
    res.status(200).json({
      success: true,
      message: "Market trends fetched successfully (MongoDB placeholder)",
      data: {
        period,
        trends: [
          { commodity: "Wheat", trend: "up", change: 5.2 },
          { commodity: "Cotton", trend: "up", change: 3.8 },
          { commodity: "Rice", trend: "down", change: -2.1 },
          { commodity: "Soybeans", trend: "up", change: 1.5 }
        ],
        overallTrend: "bullish"
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching market trends",
      error: error.message
    });
  }
};

// Get market sentiment
exports.getSentiment = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Market sentiment fetched successfully (MongoDB placeholder)",
      data: {
        overallSentiment: "positive",
        score: 72,
        factors: [
          "Strong export demand",
          "Favorable weather conditions",
          "Government MSP support",
          "Global supply concerns"
        ],
        commodities: [
          { name: "Wheat", sentiment: "bullish" },
          { name: "Cotton", sentiment: "bullish" },
          { name: "Rice", sentiment: "neutral" },
          { name: "Soybeans", sentiment: "bullish" }
        ]
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching market sentiment",
      error: error.message
    });
  }
};

// Get performance metrics
exports.getPerformanceMetrics = async (req, res) => {
  try {
    const { commodity } = req.params;

    res.status(200).json({
      success: true,
      message: "Performance metrics fetched successfully (MongoDB placeholder)",
      data: {
        commodity,
        metrics: {
          dayChange: 1.5,
          weekChange: 3.2,
          monthChange: 5.8,
          yearChange: 12.4,
          volume: 125000,
          marketCap: 2500000000
        }
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching performance metrics",
      error: error.message
    });
  }
};

// Get trend analysis chart data
exports.getTrendAnalysis = async (req, res) => {
  try {
    const { commodity, period = "month" } = req.query;

    // Generate mock historical data
    const generateHistory = (basePrice, days) => {
      const data = [];
      let price = basePrice;
      for (let i = days; i >= 0; i--) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        price = price + (Math.random() - 0.5) * 10;
        data.push({
          date: date.toISOString().split('T')[0],
          price: Math.round(price * 100) / 100
        });
      }
      return data;
    };

    res.status(200).json({
      success: true,
      message: "Trend analysis fetched successfully (MongoDB placeholder)",
      data: {
        commodity: commodity || "Wheat",
        period,
        history: generateHistory(280, 30)
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching trend analysis",
      error: error.message
    });
  }
};