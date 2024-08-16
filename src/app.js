// src/app.js
const express = require("express");
const connectDB = require("./config/db");
const urlRoutes = require("./routes/urlRoutes");
require("dotenv").config();

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(express.json());

// Serves the static files from the public directory
app.use(express.static("public"));

// Routes
app.use("/api/url", urlRoutes);

// Serve the index.html file for all other routes
app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

module.exports = app;
