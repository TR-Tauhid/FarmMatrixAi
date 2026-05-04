// filepath: backend/models/CropRecommendation.js
const mongoose = require('mongoose');

const cropRecommendationSchema = new mongoose.Schema({
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User',
    required: true
  },
  soilType: { type: String, required: true },
  climate: { type: String, required: true },
  season: { type: String, required: true },
  rainfall: { type: Number },
  temperature: { type: Number },
  location: {
    latitude: { type: Number },
    longitude: { type: Number },
    region: { type: String }
  },
  recommendedCrops: [{
    cropName: { type: String },
    confidence: { type: Number },
    expectedYield: { type: Number },
    growthPeriod: { type: String },
    waterRequirement: { type: String },
    soilPH: { type: String }
  }],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('CropRecommendation', cropRecommendationSchema);