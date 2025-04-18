const express = require('express');
const cors = require('cors');
const contactRoute = require('./routes/contact');
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

const app = express();

// CORS config
const corsOptions = {
  origin: 'https://abhi050505.netlify.app',
  methods: ['POST', 'GET'],
  credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());

// Test for env values
console.log("EMAIL_USER:", process.env.EMAIL_USER);
console.log("EMAIL_PASS:", process.env.EMAIL_PASS ? "Loaded" : "Not loaded");

// Route
app.use('/contact', contactRoute);

// Port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
