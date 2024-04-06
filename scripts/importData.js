const mongoose = require('mongoose');
const fs = require('fs');
const Data = require('../models/Data');

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://monuverma27474:uDNjLp52HD8C5hRO@cluster0.uncewrv.mongodb.net/trade_dashboard', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB Atlas');
    // Read and import EURUSD.json data
    importData('EURUSD.json', 'EURUSD');
    // Read and import BTCUSD.json data
    importData('BTCUSD.json', 'BTCUSD');
  })
  .catch(err => console.error('Error connecting to MongoDB Atlas:', err));

// Function to read JSON file and import data into MongoDB
const importData = (filename, symbol) => {
  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
      console.error(`Error reading ${filename}:`, err);
      return;
    }
    try {
      const jsonData = JSON.parse(data);
      // Insert each data point into MongoDB
      Data.insertMany(jsonData.map(item => ({
        symbol: symbol,
        open: item.open,
        high: item.high,
        low: item.low,
        close: item.close,
        volume: item.volume,
        tick_volume: item.tick_volume,
        date: item.date,
        hour: item.hour,
        minute: item.minute,
        spread: item.spread,
        fullDate: new Date(item.fullDate.$date),
        createdAt: new Date(item.createdAt.$date),
        updatedAt: new Date(item.updatedAt.$date)
      })))
      .then(() => console.log(`Data for ${symbol} imported successfully`))
      .catch(err => console.error(`Error importing data for ${symbol}:`, err));
    } catch (error) {
      console.error(`Error parsing JSON file ${filename}:`, error);
    }
  });
};