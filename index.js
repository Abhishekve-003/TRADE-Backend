// backend/index.js

const express = require('express');
const mongoose = require('mongoose');
const dataRoutes = require('./routes/dataRoutes');
const cors = require('cors');

const app = express();
const port = 4000;

// Connect to MongoDB
mongoose.connect('mongodb+srv://monuverma27474:uDNjLp52HD8C5hRO@cluster0.uncewrv.mongodb.net/trade_dashboard', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api', dataRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
