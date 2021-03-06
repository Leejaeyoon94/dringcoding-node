import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import "express-async-errors";
import tweetsRouter from "./router/tweets.js";

const app = express();

app.use(express.json());
app.use(helmet());
app.use(morgan("tiny"));
app.use(cors());

app.use("/tweets", tweetsRouter); //라우터

app.use((req, res, next) => {
  res.sendStatus(404);
});

app.use((error, req, res, next) => {
  console.log(error);
  res.sendStatus(500);
});

app.listen(8080);
