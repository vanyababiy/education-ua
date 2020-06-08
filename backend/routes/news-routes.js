const express = require("express");

const newsControllers = require("../controllers/news-controllers");

const router = express.Router();

router.get("/news/:nId", newsControllers.getNewsById);
router.get("/news/", newsControllers.getAllNews);

router.post("/news", newsControllers.createNews);

module.exports = router;
