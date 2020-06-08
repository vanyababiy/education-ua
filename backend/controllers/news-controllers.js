const express = require("express");

const HttpError = require("../models/http-error");

const DUMMY_NEWS = [
  {
    id: "n1",
    title: "Get up early!",
    description: "WOOOOW",
    creator: "u1",
  },
];

const getNewsById = (req, res, next) => {
  const NewsId = req.params.nId;

  const news = DUMMY_NEWS.find((n) => n.id === NewsId);

  if (!news) {
    throw new HttpError("Неможливо знайти таку новину.", 404);
  }

  res.json({ news });
};

exports.getNewsById = getNewsById;
