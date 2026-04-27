// filepath: backend/controllers/newsController.js
const News = require('../models/News');

/**
 * News Controller
 * Handles agricultural news and market insights
 * 
 * MongoDB Integration: Replace mock responses with actual DB operations
 */

// Get all news with filters
exports.getAllNews = async (req, res) => {
  try {
    const { category, limit = 20, page = 1 } = req.query;

    // MongoDB placeholder - replace with:
    // const news = await News.findAll({ category, limit: parseInt(limit), skip: (page-1) * limit });
    
    // Mock news data
    const mockNews = [
      {
        id: "1",
        title: "Government Announces New MSP for Kharif Crops",
        summary: "The Cabinet Committee on Economic Affairs has approved the minimum support price for kharif crops for the 2024-25 season.",
        category: "market",
        source: "Agricultural Ministry",
        publishedAt: "2024-04-20T10:00:00Z",
        imageUrl: "https://example.com/news1.jpg",
        isTrending: true
      },
      {
        id: "2",
        title: "New AI-Powered Disease Detection System Launched",
        summary: "FarmMatrixAI introduces advanced plant disease detection using deep learning algorithms.",
        category: "technology",
        source: "Tech News",
        publishedAt: "2024-04-19T14:30:00Z",
        imageUrl: "https://example.com/news2.jpg",
        isTrending: true
      },
      {
        id: "3",
        title: "Monsoon Forecast: Normal Rainfall Expected",
        summary: "IMD predicts normal monsoon for the upcoming agricultural season.",
        category: "weather",
        source: "Weather Department",
        publishedAt: "2024-04-18T09:00:00Z",
        imageUrl: "https://example.com/news3.jpg",
        isTrending: false
      },
      {
        id: "4",
        title: "Organic Farming Initiative Gets Budget Boost",
        summary: "Government allocates additional funds for organic farming promotion.",
        category: "policy",
        source: "Finance Ministry",
        publishedAt: "2024-04-17T11:00:00Z",
        imageUrl: "https://example.com/news4.jpg",
        isTrending: false
      },
      {
        id: "5",
        title: "Research Breakthrough: Drought-Resistant Wheat Variety",
        summary: "Scientists develop new wheat variety resistant to drought conditions.",
        category: "research",
        source: "Agricultural Research Council",
        publishedAt: "2024-04-16T16:00:00Z",
        imageUrl: "https://example.com/news5.jpg",
        isTrending: true
      }
    ];

    res.status(200).json({
      success: true,
      message: "News fetched successfully (MongoDB placeholder)",
      data: {
        news: mockNews,
        pagination: {
          page: parseInt(page),
          limit: parseInt(limit),
          total: 50,
          pages: 3
        }
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching news",
      error: error.message
    });
  }
};

// Get news by category
exports.getByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const { limit = 10 } = req.query;

    res.status(200).json({
      success: true,
      message: "Category news fetched successfully (MongoDB placeholder)",
      data: {
        category,
        news: []
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching category news",
      error: error.message
    });
  }
};

// Get trending news
exports.getTrending = async (req, res) => {
  try {
    const { limit = 5 } = req.query;

    res.status(200).json({
      success: true,
      message: "Trending news fetched successfully (MongoDB placeholder)",
      data: {
        trending: [
          {
            id: "1",
            title: "Government Announces New MSP for Kharif Crops",
            category: "market",
            views: 15000
          },
          {
            id: "2",
            title: "New AI-Powered Disease Detection System Launched",
            category: "technology",
            views: 12000
          },
          {
            id: "5",
            title: "Research Breakthrough: Drought-Resistant Wheat Variety",
            category: "research",
            views: 9500
          }
        ]
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching trending news",
      error: error.message
    });
  }
};

// Get a specific news article
exports.getById = async (req, res) => {
  try {
    const { id } = req.params;

    res.status(200).json({
      success: true,
      message: "News article fetched successfully (MongoDB placeholder)",
      data: {
        id,
        title: "Sample News Article",
        content: "Full article content here...",
        category: "market",
        tags: ["agriculture", "msp", "farmers"]
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching news article",
      error: error.message
    });
  }
};

// Create news article (admin)
exports.createNews = async (req, res) => {
  try {
    const newsData = req.body;

    // MongoDB placeholder - replace with:
    // const news = await News.create(newsData);

    res.status(201).json({
      success: true,
      message: "News created successfully (MongoDB placeholder)",
      data: newsData
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error creating news",
      error: error.message
    });
  }
};

// Get category filters
exports.getCategories = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      data: {
        categories: [
          { id: "market", name: "Market", count: 15 },
          { id: "technology", name: "Technology", count: 12 },
          { id: "weather", name: "Weather", count: 8 },
          { id: "policy", name: "Policy", count: 10 },
          { id: "research", name: "Research", count: 5 }
        ]
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching categories",
      error: error.message
    });
  }
};