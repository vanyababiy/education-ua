const express = require("express");

const HttpError = require("../models/http-error");

const router = express.Router();

const DUMMY_NEWS = [
  {
    id: "n1",
    title: "Get up early!",
    description: "WOOOOW",
    creator: "u1",
  },
];

router.get("/news/:nId", (req, res, next) => {
  const NewsId = req.params.nId;

  const news = DUMMY_NEWS.find((n) => n.id === NewsId);

  if (!news) {
    throw new HttpError("Неможливо знайти таку новину.", 404);
  }

  res.json({ news });
});

module.exports = router;
