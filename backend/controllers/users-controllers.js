const uuid = require("uuid-v4");

const HttpError = require("../models/http-error");

const DUMMY_USERS = [
  {
    id: "u1",
    name: "Management Youth Policy",
    email: "education@gmail.com",
    password: "12345678",
  },
];

const getUsers = (req, res, next) => {
  res.json({ users: DUMMY_USERS });
};

const signup = (req, res, next) => {
  const { name, email, password } = req.body;

  const hasUser = DUMMY_USERS.find((u => u.email === email));

  if (hasUser) {
    throw new HttpError("Такий користувач уже існує.", 422);
  }

  const createdUser = {
    id: uuid(),
    name,
    email,
    password,
  };

  DUMMY_USERS.push(createdUser);

  res.status(201).json({ user: createdUser });
};

const login = (req, res, next) => {
  const { email, password } = req.body;

  const identifiedUser = DUMMY_USERS.find((user) => user.email === email);
  if (!identifiedUser || identifiedUser.password !== password) {
    const error = new HttpError(
      "Такого користувача не існує або ж невірно введені дані.",
      401
    );
    throw error;
  }
  res.json({ message: "Логування успішне!" });
};

exports.getUsers = getUsers;
exports.signup = signup;
exports.login = login;
