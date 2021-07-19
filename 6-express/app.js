import express from "express";
const app = express();

app.get(
  "/",
  (req, res, next) => {
    console.log("first");
    if (true) {
      res.send("hello"); //콜백함수를 끝내지않아서 뜨는 오류 Cannot set headers after they are sent to the client /return이 필요
    }
    res.send("hi");
  },
  (req, res, next) => {
    console.log("first2");
  },
  (req, res, next) => {
    console.log("second");
  }
);

app.get("/", (req, res, next) => {});

app.use((req, res, next) => {
  res.status(404).send("not available");
});

app.use((error, req, res, next) => {
  console.error("error");
  res.status(500).send("sorry,try later");
});

app.listen(8080);
