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
    const { category, location, limit = 20, page = 1 } = req.query;
    let newsData = [];

    // Uses your environment variable, or falls back to the provided key
    const apiKey = process.env.NEWS_API_KEY || 'd67533b7139647cc97da9d3c3d4ed3af';
    
    if (apiKey) {
      try {
        let query = 'agriculture OR farming OR crops';
        if (location && location !== "Detecting location...") query += ` AND "${location}"`;
        if (category && category !== 'All News') query += ` AND "${category}"`;
        
        const response = await fetch(`https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&sortBy=publishedAt&language=en&pageSize=${limit}&page=${page}&apiKey=${apiKey}`);
        
        if (response.ok) {
          const data = await response.json();
          newsData = data.articles.filter(a => a.title && a.description).map((article, index) => ({
            id: index.toString(),
            title: article.title,
            summary: article.description,
            category: category && category !== 'All News' ? category : 'Industry',
            source: article.source.name,
            publishedAt: article.publishedAt,
            imageUrl: article.urlToImage || "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&q=80&w=1000",
            url: article.url,
            isTrending: index < 3
          }));
        } else {
          const errorData = await response.json();
          console.error("News API Failed:", errorData);
          return res.status(500).json({
            success: false,
            message: "External News API Error: " + (errorData.message || "Unknown error"),
            error: errorData
          });
        }
      } catch (apiError) {
        console.error("News API Error:", apiError);
        return res.status(500).json({
          success: false,
          message: "Failed to connect to External News API",
          error: apiError.message
        });
      }
    } else {
      return res.status(400).json({
        success: false,
        message: "NEWS_API_KEY is missing from environment variables."
      });
    }

    res.status(200).json({
      success: true,
      message: "News fetched successfully",
      data: {
        news: newsData,
        pagination: {
          page: parseInt(page),
          limit: parseInt(limit),
          total: newsData.length,
          pages: Math.ceil(newsData.length / parseInt(limit)) || 1
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