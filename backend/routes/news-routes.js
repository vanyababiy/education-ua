const express = require("express");

const newsControllers = require("../controllers/news-controllers");

const router = express.Router();

router.get("/:nId", newsControllers.getNewsById);

router.patch("/:nId", newsControllers.updateNews);

router.delete("/:nId", newsControllers.deleteNews);

router.get("/", newsControllers.getAllNews);

router.post("/", newsControllers.createNews);

module.exports = router;
