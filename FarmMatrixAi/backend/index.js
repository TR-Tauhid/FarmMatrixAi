// filepath: backend/index.js
const express = require("express");
const cors = require("cors");
const path = require("path");

// Import routes
const authRoutes = require('./routes/auth');
const cropRoutes = require('./routes/crops');
const diseaseRoutes = require('./routes/disease');
const environmentRoutes = require('./routes/environment');
const marketRoutes = require('./routes/market');
const newsRoutes = require('./routes/news');

// Import middleware
const authMiddleware = require('./middleware/auth');
const errorHandler = require('./middleware/errorHandler');

const app = express();

// ============================================
// MongoDB Connection Placeholder
// ============================================
// To integrate MongoDB:
// 1. Install mongoose: npm install mongoose
// 2. Uncomment the code below and add your MongoDB URI
// 
// const mongoose = require('mongoose');
// const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/farmmatrix';
// 
// mongoose.connect(MONGO_URI)
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.error('MongoDB connection error:', err));
// ============================================

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// Health check endpoint
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "FarmMatrixAI Backend Running",
    version: "1.0.0",
    endpoints: {
      health: "/",
      auth: "/api/auth",
      crops: "/api/crops",
      disease: "/api/disease",
      environment: "/api/environment",
      market: "/api/market",
      news: "/api/news"
    },
    mongodb: "Integration pending - MongoDB placeholder active"
  });
});

// Apply auth middleware to all API routes
app.use('/api', authMiddleware);

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/crops', cropRoutes);
app.use('/api/disease', diseaseRoutes);
app.use('/api/environment', environmentRoutes);
app.use('/api/market', marketRoutes);
app.use('/api/news', newsRoutes);

// 404 handler for undefined routes
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
    path: req.path
  });
});

// Error handling middleware
app.use(errorHandler);

// Server configuration
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`API Base URL: http://localhost:${PORT}/api`);
  console.log(`MongoDB: Placeholder mode - integration pending`);
});

module.exports = app;