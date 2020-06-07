const express = require("express");
const bodyParser = require("body-parser");

const newsRoutes = require("./routes/news-routes");

const app = express();

app.use("/", newsRoutes);

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res
    .status(error.code || 500)
    .json({ message: error.message || "Невідома помилка" });
});

app.listen(5000);
