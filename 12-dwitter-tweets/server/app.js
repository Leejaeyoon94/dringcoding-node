import express from "express";
import "express-async-errors";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import tweetsRouter from "./router/tweets.js";
import authRouter from "./router/auth.js";

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan("tiny"));

app.use("/tweets", tweetsRouter);
app.use("/auth", authRouter);
import dotenv from "dotenv";
import { config } from "./config.js";
import { Server } from "socket.io";
import { initSocket } from "./connection/socket.js";
// import { sequelize } from "./db/database.js";
import connect from "mongodb";
import { connectDB } from "./database/database_seq.js";

dotenv.config();

app.use((req, res, next) => {
  res.sendStatus(404);
});

app.use((error, req, res, next) => {
  console.error(error);
  res.sendStatus(500);
});

// db.getConnection().then();

// sequelize.sync().then(() => {
//   const server = app.listen(config.host.port);
//   initSocket(server);
// });

connectDB()
  .then((client) => {
    console.log(client);
    const server = app.listen(config.host.port);
    initSocket(server);
  })
  .catch(console.error);
