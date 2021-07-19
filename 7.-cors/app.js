import express from "express";
import cors from "cors";
import cookieParser from "cookie-Parser"; //쿠키
import morgan from "morgan"; //각종정보
import Helmet from "helmet";
import helmet from "helmet"; //보안에필요한 헤더추가

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(morgan("combined"));

app.use(
  cors({
    origin: ["http://127.0.0.1:5500"],
    optionsSuccessStatus: 200,
    Credentials: true,
  })
); //헤더 설정

app.use(helmet());

app.get("/", (req, res) => {
  console.log(req.body);
  console.log(req.cookies);
  res.send("hi");
});

app.listen(8080);
