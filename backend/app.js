const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const newsRoutes = require("./routes/news-routes");
const usersRoutes = require("./routes/users-routes");

const HttpError = require("./models/http-error");

const app = express();

app.use(bodyParser.json());

app.use("/news", newsRoutes);
app.use("/users", usersRoutes);

app.use((req, res, next) => {
  const error = new HttpError("Не можливо віднайти такий шлях.");
  throw error;
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res
    .status(error.code || 500)
    .json({ message: error.message || "Невідома помилка" });
});

mongoose
  .connect(
    "mongodb+srv://babiy:dktEUKXOs7GsiJaY@education-ua-yzfgr.mongodb.net/news?retryWrites=true&w=majority",
    { useUnifiedTopology: true, useNewUrlParser: true }
  )
  .then(() => app.listen(5000))
  .catch((err) => {
    console.log(err);
  });
