import Mongoose from "mongoose";
import { getTweets } from "../database/database.js";
import { useVirtualId } from "../database/database.js";
import * as UserRepository from "./auth.js";

//NOSQL 정보의 중복성 > 관계: 쿼리의 성능을 위해서

const tweetSchema = new Mongoose.Schema(
  {
    text: { type: String, required: true },
    userId: { type: String, required: true },
    name: { type: String, required: true },
    username: { type: String, required: true },
    url: String,
  },
  { timestamps: true }
);

useVirtualId(tweetSchema);
const Tweet = Mongoose.model("Tweet", tweetSchema);

export async function getAll() {
  return Tweet.find().sort({ createdAt: -1 });
  // return getTweets() //
  //   .find()
  //   .sort({ createdAt: -1 })
  //   .toArray()
  //   .then(mapTweets); // _id -> id
}

export async function getAllByUsername(username) {
  return Tweet.find({ username }).sort({ createdAt: -1 });
  // return getTweets() //
  //   .find({ username })
  //   .sort({ createdAt: -1 })
  //   .toArray()
  //   .then(mapTweets); // _id -> id
}

export async function getById(id) {
  return Tweet.findById(id);
  // console.log(id);
  // return getTweets()
  //   .find({ _id: new ObjectID(id) })
  //   .next()
  //   .then(mapOptionalTweet);
}

export async function create(text, userId) {
  return UserRepository.findById(userId).then((user) => new Tweet({ text, userId, name: user.name, username: user.username }).save());
  // getTweets().insertOne({
  //   text,
  //   createdAt: new Date(),
  //   userId,
  //   name: user.name,
  //   username: user.username,
  //   url: user.url,
  // })
}

export async function update(id, text) {
  return Tweet.findByIdAndUpdate(id, { text }, { returnOriginal: false });
  // return getTweets()
  //   .findOneAndUpdate({ _id: new ObjectID(id) }, { $set: { text } }, { returnOriginal: false })
  //   .then((result) => result.value)
  //   .then(mapOptionalTweet);
}

export async function remove(id) {
  return Tweet.findByIdAndDelete(id);
  // return getTweets().deleteOne({ _id: new ObjectID(id) });
}
