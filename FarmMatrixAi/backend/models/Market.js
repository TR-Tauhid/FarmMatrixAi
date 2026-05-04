// filepath: backend/models/Market.js
const mongoose = require('mongoose');

const marketSchema = new mongoose.Schema({
  commodity: {
    name: { type: String, required: true },
    category: { type: String },
    unit: { type: String }
  },
  price: {
    current: { type: Number, required: true },
    previous: { type: Number },
    change: { type: Number },
    changePercent: { type: Number }
  },
  trend: { type: String, enum: ['bullish', 'bearish', 'neutral'] },
  volume: { type: Number },
  marketCap: { type: Number },
  sentiment: {
    score: { type: Number },
    label: { type: String },
    factors: [{ type: String }]
  },
  location: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Market', marketSchema);