import Mongoose from "mongoose";
import { config } from "../config.js";

export async function connectDB() {
  return Mongoose.connect(config.db.host, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });
}

export function useVirtualId(schema) {
  //_id > id
  //_id를 string으로 변환해서 받는당
  schema.virtual("id").get(function () {
    return this._id.toString();
  });
  //가상의 id 를 json으로 변환해서 받아야 id를 저장함
  schema.set("toJSON", { virtuals: true });
  schema.set("toOject", { virtuals: true });
}

let db;

export function getTweets() {
  return db.collection("tweets");
}
