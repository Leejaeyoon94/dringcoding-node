import MongoDb from "mongodb";
import { getUsers } from "./database_seq";

export async function findByUsername(username) {
  return getUsers()
    .find({ username })
    .next()
    .then((data) => {
      console.log(data);
      return data;
    });
}

export async function findById(id) {
  return null;
}

export async function createUser(user) {
  return getUsers()
    .insertOne(user)
    .then((data) => {
      console.log(data);
      return data;
    });
}
