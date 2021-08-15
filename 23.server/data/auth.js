import Mongoose from "mongoose";
import { useVirtualId } from "../database/database.js";

const userSchema = new Mongoose.Schema({
  username: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  url: String,
});

useVirtualId(userSchema);
const User = Mongoose.model("User", userSchema);
// SQL: DB Schema
// NOSQL: DB Schema X, ORM Schema
export async function findByUsername(username) {
  return User.findOne({ username });
  // return getUsers().find({ username }).next().then(mapOptionalUser);
}

export async function findById(id) {
  return User.findById(id);
  // return getUsers()
  //   .find({ _id: new ObjectID(id) })
  //   .next()
  //   .then(mapOptionalUser);
}

export async function createUser(user) {
  return new User(user).save().then((data) => data.id);
  // return getUsers()
  //   .insertOne(user)
  //   .then((result) => result.ops[0]._id.toString());
}
