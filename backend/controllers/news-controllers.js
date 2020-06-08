const express = require("express");

const uuid = require("uuid-v4");

const HttpError = require("../models/http-error");

const DUMMY_NEWS = [
  {
    id: "n1",
    title: "Get up early!",
    description: "WOOOOW",
    creator: "u1",
  },
  {
    id: "n2",
    title: "Get up early!",
    description: "WOO2OOW",
    creator: "u2",
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

const getAllNews = (req, res, next) => {
  const news = DUMMY_NEWS.map((place) => place);
  if (!news) {
    throw new HttpError("Неможливо знайти таку новину.", 404);
  }
  res.json({ news });
};

const createNews = (req, res, next) => {
  const { title, description, creator } = req.body;
  const createdNews = {
    id: uuid(),
    title,
    description,
    creator,
  };

  DUMMY_NEWS.push(createdNews);

  res.status(201).json({ news: createdNews });
};

exports.getNewsById = getNewsById;
exports.getAllNews = getAllNews;
exports.createNews = createNews;
