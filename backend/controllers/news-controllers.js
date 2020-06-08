const express = require("express");

const { validationResult } = require("express-validator");

const uuid = require("uuid-v4");

const HttpError = require("../models/http-error");
const News = require("../models/news");

let DUMMY_NEWS = [
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
  const news = DUMMY_NEWS.map((news) => news);
  if (!news) {
    throw new HttpError("Неможливо знайти такі новини.", 404);
  }
  res.json({ news });
};

const createNews = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new HttpError("Неправильно введені дані, перевірте ще раз.", 422);
  }

  const { title, description, creator } = req.body;

  const createdNews = new News({
    title,
    description,
    creator,
  });
  try {
    await createdNews.save();
  } catch (err) {
    const error = new HttpError(
      "Створення новини не відбулось, попробуйте ще раз.",
      500
    );
    return next(error);
  }

  res.status(201).json({ news: createdNews });
};

const updateNews = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new HttpError("Неправильно введені дані, перевірте ще раз.", 422);
  }

  const { title, description } = req.body;
  const newsId = req.params.nId;

  const updatedNews = { ...DUMMY_NEWS.find((n) => n.id === newsId) };
  const newsIndex = DUMMY_NEWS.findIndex((n) => n.id === newsId);

  updatedNews.title = title;
  updatedNews.description = description;

  DUMMY_NEWS[newsIndex] = updatedNews;

  res.status(200).json({ news: updatedNews });
};

const deleteNews = (req, res, next) => {
  const newsId = req.params.nId;

  DUMMY_NEWS = DUMMY_NEWS.filter((n) => n.id !== newsId);
  const isFind = DUMMY_NEWS.find((n) => n.id == newsId);
  if (!isFind) {
    throw new HttpError("Неможливо знайти таку новину.", 404);
  }

  res.status(200).send({ message: "Новину видалено." });
};

exports.getNewsById = getNewsById;
exports.getAllNews = getAllNews;
exports.createNews = createNews;
exports.updateNews = updateNews;
exports.deleteNews = deleteNews;
