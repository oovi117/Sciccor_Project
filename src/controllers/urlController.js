// src/controllers/urlController.js
const shortid = require("shortid");
const QRCode = require("qrcode");
const Url = require("../models/url");

exports.shortenUrl = async (req, res) => {
  const { originalUrl, customSlug } = req.body;
  let urlCode = customSlug || shortid.generate();

  try {
    let url = await Url.findOne({ shortUrl: urlCode });
    if (url) return res.status(400).json("URL code already in use");

    const shortUrl = `${req.protocol}://${req.get("host")}/${urlCode}`;
    const qrCode = await QRCode.toDataURL(shortUrl);

    url = new Url({ originalUrl, shortUrl, customSlug, qrCode });
    await url.save();

    res.json({ shortUrl, qrCode });
  } catch (err) {
    res.status(500).json("Server error");
  }
};

exports.redirectUrl = async (req, res) => {
  try {
    const url = await Url.findOne({
      shortUrl: `${req.protocol}://${req.get("host")}/${req.params.code}`,
    });
    if (url) {
      url.clicks++;
      await url.save();
      return res.redirect(url.originalUrl);
    } else {
      res.status(404).json("No URL found");
    }
  } catch (err) {
    res.status(500).json("Server error");
  }
};

exports.getHistory = async (req, res) => {
  try {
    const urls = await Url.find();
    res.json(urls);
  } catch (err) {
    res.status(500).json("Server error");
  }
};
