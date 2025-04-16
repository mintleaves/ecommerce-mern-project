const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const xssClean = require("xss-clean");
const rateLimit = require("express-rate-limit");
const userRouter = require("./routers/userRouter");
const { seedRouter } = require("./routers/seedRouter");
const { errorResponse } = require("./controllers/responseController");
const app = express();

const rateLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minutes
  max: 10,
  message: "Too many request from this IP. Please try again later",
});

app.use(rateLimiter);
app.use(xssClean());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/users", userRouter);
app.use("/api/seed", seedRouter);

app.get("/", (req, res) => {
  res.status(200).send({
    messgae: "welcome to my server!!!",
  });
});

//client error handling
app.use((req, res, next) => {
  next(createError(404, "route not found"));
});

//server error handling -> all the errors are going to handle into this
app.use((err, req, res, next) => {
  return errorResponse(res, {
    statusCode: err.status,
    message: err.message,
  });
});

module.exports = app;
