import express from "express";
import "express-async-errors";
//db가없어서 메모리에 저장

let tweets = [
  {
    id: "1",
    text: "드림코딩 화이팅",
    createdAt: Date.now().toString(),
    name: "bob",
    username: "bob",
    url: "https://widgetwhats.com/app/uploads/201911/free-profile-photo-whatsapp-1.png",
  },
  {
    id: "2",
    text: "드림코딩 화이팅!!!",
    createdAt: Date.now().toString(),
    name: "lee",
    username: "lee",
    url: "https://widgetwhats.com/app/uploads/201911/free-profile-photo-whatsapp-1.png",
  },
];
const router = express.Router();

//GET /tweets
//GET /tweets?username=:username
router.get("/", (req, res, next) => {
  const username = req.query.username;
  const data = username ? tweets.filter((tweet) => tweet.username === username) : tweets;
  res.status(200).json(data);
});
//GET tweets/:id
router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  const tweet = tweets.find((tweet) => tweet.id === id);
  if (tweet) {
    res.status(200).json(tweet);
  } else {
    res.status(404).json({ message: `Tweet id(${id}) not found ` });
  }
});

//POST /tweets
router.post("/", (req, res, next) => {
  const { text, name, username } = req.body;
  const tweet = {
    id: Date.now().toString(),
    text,
    createdAt: new Date(),
    name,
    username,
  };
  tweets = [tweet, ...tweets];
  res.status(201).json(tweet);
});

//PUT /tweets/:id
router.put("/:id", (req, res, next) => {
  const id = req.params.id;
  const text = req.body.text;
  const tweet = tweets.find((tweet) => tweet.id === id);
  if (tweet) {
    tweet.text = text;
    res.status(200).json(tweet);
  } else {
    res.status(404).json({ message: `Tweet id(${id}) not found ` });
  }
});

//DELETE /tweets/:id
router.delete("/:id", (req, res, next) => {
  const id = req.params.id;
  tweets = tweets.filter((tweet) => tweet.id !== id);
  res.sendStatus(204);
});

export default router;
