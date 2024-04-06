// backend/routes/dataRoutes.js

const express = require('express');
const router = express.Router();
const Data = require('../models/Data');

// GET data for a specific symbol
router.get('/data/:symbol', async (req, res) => {
  const symbol = req.params.symbol;
  try {
    const data = await Data.find({ symbol });
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
