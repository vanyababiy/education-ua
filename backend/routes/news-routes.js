const express = require("express");
const { check } = require("express-validator");

const newsControllers = require("../controllers/news-controllers");

const router = express.Router();

router.get("/:nId", newsControllers.getNewsById);

router.patch("/:nId", newsControllers.updateNews);

router.post(
  "/",
  [check("title").not().isEmpty(), check("description").not().isEmpty()],
  newsControllers.createNews
);

router.delete("/:nId", newsControllers.deleteNews);

router.get("/", newsControllers.getAllNews);

module.exports = router;
