const express = require("express");

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
  res.json({ news });
});

module.exports = router;
