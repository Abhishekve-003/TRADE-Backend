// backend/models/Data.js

const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  symbol: String,
  open: Number,
  high: Number,
  low: Number,
  close: Number,
  volume: Number,
  tick_volume: Number,
  date: String,
  hour: Number,
  minute: Number,
  spread: Number,
  fullDate: Date,
  createdAt: Date,
  updatedAt: Date
});

module.exports = mongoose.model('Data', dataSchema);
