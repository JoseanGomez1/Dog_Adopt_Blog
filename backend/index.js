const cors = require('cors');
const morgan = require('morgan');
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./connectDB');
const dogblog = require('./Models/Dogblog');

// Initialize .env variables
dotenv.config();

// Pull PORT from .env, give a default value of 4000
const { PORT } = process.env;

// Create the Express application
const app = express();

// MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // Parse JSON bodies
app.use(cors()); // Enable CORS for all origins
app.use(morgan('dev')); // Logging for development
app.use("/uploads", express.static("uploads"));

// Test route to fetch dog adoptions
app.get('/api/dogadoptions', async (req, res) => {
  try {
    const data = await dogblog.find({});
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
});

// Test route
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// LISTENER
app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});

// Connect to MongoDB
connectDB();
