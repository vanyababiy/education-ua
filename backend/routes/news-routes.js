const express = require("express");

const newsControllers = require("../controllers/news-controllers");

const router = express.Router();

router.get("/news/:nId", newsControllers.getNewsById);

module.exports = router;
