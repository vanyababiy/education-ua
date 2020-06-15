const { validationResult } = require("express-validator");

const HttpError = require("../models/http-error");
const User = require("../models/user");

const getUsers = async (req, res, next) => {
  let users;
  try {
    users = await User.find((news) => news);
  } catch (err) {
    const error = new HttpError(
      "Щось пішло не так при отриманні списку користувачів, попробуйте ще раз.",
      500
    );
    return next(error);
  }

  res.json({ users: users.map((user) => user.toObject({ getters: true })) });
};

const signup = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError(
        "Невірно введені дані, перевірте достовірність даних та попробуйте ввести ще раз",
        422
      )
    );
  }

  const { name, email, password } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    const error = new HttpError(
      "Щось пішло не так, реєстрація не є успішною, будь ласка, попробуй пізніше.",
      500
    );
    return next(error);
  }

  if (existingUser) {
    const error = new HttpError(
      "Такий користувач уже існує, попробуйте авторизуватись.",
      422
    );
    return next(error);
  }

  const createdUser = new User({
    name,
    email,
    password,
    news: [],
  });

  try {
    await createdUser.save();
  } catch (err) {
    const error = new HttpError(
      "Щось пішло не так, попробуйте здійснити реєстрацію ще раз.",
      500
    );
    return next(error);
  }

  res.status(201).json({ user: createdUser.toObject({ getters: true }) });
};

const login = async (req, res, next) => {
  const { email, password } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    const error = new HttpError(
      "Щось пішло не так, попробуйте ще раз залогуватись.",
      500
    );
    return next(error);
  }

  if (!existingUser || existingUser.password !== password) {
    const error = new HttpError("Невірний логін та пароль.", 401);
    return next(error);
  }

  res.json({
    message: "Логування успішне!",
    user: existingUser.toObject({ getters: true }),
  });
};

exports.getUsers = getUsers;
exports.signup = signup;
exports.login = login;
