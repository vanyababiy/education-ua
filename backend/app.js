const express = require("express");
const bodyParser = require("body-parser");

const newsRoutes = require("./routes/news-routes");

const app = express();

app.use("/", newsRoutes);

app.listen(5000);
