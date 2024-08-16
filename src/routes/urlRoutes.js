// src/routes/urlRoutes.js
const express = require("express");
const {
  shortenUrl,
  redirectUrl,
  getHistory,
} = require("../controllers/urlController");

const router = express.Router();

router.post("/shorten", shortenUrl);
router.get("/history", getHistory);
router.get("/:code", redirectUrl);

module.exports = router;
