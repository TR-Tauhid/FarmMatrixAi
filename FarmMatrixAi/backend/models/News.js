// filepath: backend/models/News.js
const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  summary: { type: String },
  content: { type: String },
  category: { 
    type: String, 
    enum: ['market', 'technology', 'weather', 'policy', 'research'] 
  },
  source: { type: String },
  author: { type: String },
  imageUrl: { type: String },
  tags: [{ type: String }],
  relatedCrops: [{ type: String }],
  publishedAt: { type: Date },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('News', newsSchema);