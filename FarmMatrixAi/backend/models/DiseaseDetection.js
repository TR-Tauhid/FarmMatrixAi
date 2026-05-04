// filepath: backend/models/DiseaseDetection.js
const mongoose = require('mongoose');

const diseaseDetectionSchema = new mongoose.Schema({
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User',
    required: true 
  },
  imageUrl: { type: String, required: true },
  imageName: { type: String },
  diseaseName: { type: String, required: true },
  confidence: { type: Number, required: true },
  severity: { type: String, enum: ['low', 'medium', 'high'] },
  description: { type: String },
  treatment: { type: String },
  prevention: { type: String },
  affectedParts: [{ type: String }],
  cropType: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('DiseaseDetection', diseaseDetectionSchema);