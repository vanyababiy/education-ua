const express = require("express");
const mongoose = require("mongoose");
const { validationResult } = require("express-validator");

const HttpError = require("../models/http-error");
const News = require("../models/news");
const User = require("../models/user");

const getNewsById = async (req, res, next) => {
  const newsId = req.params.nId;

  let news;
  try {
    news = await News.findById(newsId);
  } catch (err) {
    const error = new HttpError(
      "Щось пішло не так, неможливо знайти новину.",
      500
    );
    return next(error);
  }
  if (!news) {
    const error = new HttpError("Неможливо знайти таку новину.", 404);
    return next(error);
  }
  res.json({ news: news.toObject({ getters: true }) });
};

const getAllNews = async (req, res, next) => {
  let news;
  try {
    news = await News.find((news) => news);
  } catch (err) {
    const error = new HttpError(
      "Щось пішло не так, неможливо знайти новини.",
      500
    );
    return next(error);
  }

  if (!news) {
    const error = new HttpError("Неможливо знайти такі новини.", 404);
    return next(error);
  }
  res.json({ news: news.map((news) => news.toObject({ getters: true })) });
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

  let user;
  try {
    user = await User.findById(creator);
  } catch (err) {
    const error = new HttpError(
      "Створення новини не відбулось, пробуйте ще раз.",
      500
    );
    return next(error);
  }

  if (!user) {
    const error = new HttpError("Не можливо знайти такого користувача", 404);
    return next(error);
  }

  console.log(user);

  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await createdNews.save({ session: sess });
    user.news.push(createdNews);
    await user.save({ session: sess });
    await sess.commitTransaction();
  } catch (err) {
    const error = new HttpError(
      "Створення новини не відбулось, попробуйте ще раз.",
      500
    );
    return next(error);
  }

  res.status(201).json({ news: createdNews });
};

const updateNews = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new HttpError(
      "Неправильно введені дані, перевірте ще раз.",
      422
    );
    return next(error);
  }

  const { title, description } = req.body;
  const newsId = req.params.nId;

  let news;
  try {
    news = await News.findById(newsId);
  } catch (err) {
    const error = new HttpError(
      "Щось пішло не так, неможливо здійснити операцію оновлення.",
      500
    );
    return next(error);
  }

  news.title = title;
  news.description = description;
  try {
    await news.save();
  } catch (err) {
    const error = new HttpError(
      "Щось пішло не так, неможливо здійснити операцію оновлення.",
      500
    );
    return next(error);
  }

  res.status(200).json({ news: news.toObject({ getters: true }) });
};

const deleteNews = async (req, res, next) => {
  const newsId = req.params.nId;

  let oneNews;
  try {
    oneNews = await News.findById(newsId).populate("creator");
  } catch (err) {
    const error = new HttpError(
      "Неможливо знайти таку новину, попробуйте ще раз.",
      500
    );
    return next(error);
  }

  if (!oneNews) {
    const error = new HttpError(
      "Неможливо знайти таку новину, попробуйте ще раз.",
      404
    );
    return next(error);
  }

  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await oneNews.remove({ session: sess });
    await oneNews.creator.news.pull(oneNews);
    await oneNews.creator.save({ session: sess });
    await sess.commitTransaction();
  } catch (err) {
    const error = new HttpError(
      "Щось пішло не так, неможливо здійснити операцію видалення новинми.",
      500
    );
    return next(error);
  }

  res.status(200).send({ news: `Новину видалено.` });
};

exports.getNewsById = getNewsById;
exports.getAllNews = getAllNews;
exports.createNews = createNews;
exports.updateNews = updateNews;
exports.deleteNews = deleteNews;
