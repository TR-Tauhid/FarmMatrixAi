// filepath: backend/models/Environment.js
const mongoose = require('mongoose');

const environmentSchema = new mongoose.Schema({
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User',
    required: true 
  },
  location: {
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
    region: { type: String }
  },
  soilProfile: {
    soilType: { type: String },
    ph: { type: Number },
    nitrogen: { type: Number },
    phosphorus: { type: Number },
    potassium: { type: Number },
    organicMatter: { type: Number },
    moisture: { type: Number },
    temperature: { type: Number },
    texture: { type: String }
  },
  weather: {
    current: {
      temperature: { type: Number },
      humidity: { type: Number },
      rainfall: { type: Number },
      windSpeed: { type: Number },
      condition: { type: String }
    }
  },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Environment', environmentSchema);