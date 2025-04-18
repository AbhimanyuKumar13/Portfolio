const express = require('express');
const cors = require('cors');
const contactRoute = require('./routes/contact');
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

const app = express();
console.log("EMAIL_USER:", process.env.EMAIL_USER);
console.log("EMAIL_PASS:", process.env.EMAIL_PASS ? "Loaded" : "Not loaded");
app.use(cors());
app.use(express.json());

app.use('/contact', contactRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
