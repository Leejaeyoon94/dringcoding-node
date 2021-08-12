import { sequelize } from "../db/database.js";
import SQ from "sequelize";
const DataTypes = SQ.DataTypes;
const Sequelize = SQ.Sequelize;
import { User } from "./auth.js";
import * as userRepository from "./auth.js";

export const Tweet = sequelize.define("tweet", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  text: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});
Tweet.belongsTo(User); //트윗은 유저에 포함됨 조인임

// const SELECT_JOIN = "SELECT tw.id, tw.text, tw.createdAt, tw.userId, us.name, us.url FROM tweets as tw JOIN users as us ON tw.userId=us.id";
// const ORDER_DESC = "ORDER BY tw.createdAt DESC";

const INCLUDE_USER = {
  attributes: ["id", "text", "createdAt", "userId", [Sequelize.col("user.name"), "name"], [Sequelize.col("user.username"), "username"], [Sequelize.col("user.url"), "url"]],
  include: {
    model: User,
    attributes: [],
  },
};

const ORDER_DESC = { order: [["createdAt", "DESC"]] };
export async function getAll() {
  //그냥
  // return Promise.all(
  //   tweets.map(async (tweet) => {
  //     const { username, name, url } = await userRepository.findById(tweet.userId);
  //     return { ...tweet, username, name, url };
  //   })
  // );

  //sql
  // return db
  //   .execute(`${SELECT_JOIN} ${ORDER_DESC}`) //
  //   .then((result) => result[0]);

  //
  return Tweet.findAll({ ...INCLUDE_USER, ...ORDER_DESC });
}

export async function getAllByUsername(username) {
  // return getAll().then((tweets) => tweets.filter((tweet) => tweet.username === username));

  //msql
  // return db
  //   .execute(`${SELECT_JOIN} WHERE username=? ${ORDER_DESC}`, [username]) //
  //   .then((result) => result[0]);

  return Tweet.findAll({
    ...INCLUDE_USER,
    ...ORDER_DESC,
    include: {
      ...INCLUDE_USER.include,
      where: { username },
    },
  });
}

export async function getById(id) {
  // const found = tweets.find((tweet) => tweet.id === id);
  // if (!found) {
  //   return null;
  // }
  // const { username, name, url } = await userRepository.findById(found.userId);
  // return { ...found, username, name, url };

  //msql
  // return db
  // .execute(`${SELECT_JOIN} WHERE tw.id=?`, [id]) //
  // .then((result) => result[0][0]);

  return Tweet.findOne({
    where: { id },
    ...INCLUDE_USER,
  });
}

export async function create(text, userId) {
  // const tweet = {
  //   id: new Date().toString(),
  //   text,
  //   createdAt: new Date(),
  //   userId,
  // };
  // tweets = [tweet, ...tweets];
  // return getById(tweet.id);

  return Tweet.create({ text, userId }) //
    .then((data) => this.getById(data.dataValues.id));
}
// return db
//   .execute("INSERT INTO tweets (text, createdAt, userId) VALUES(?,?,?)", [text, new Date(), userId]) //
//   .then((result) => getById(result[0].insertId));

export async function update(id, text) {
  // const tweet = tweets.find((tweet) => tweet.id === id);
  // if (tweet) {
  //   tweet.text = text;
  // }
  // return getById(tweet.id);

  //msql
  // return db.execute("UPDATE tweets SET text=? WHERE id=?", [text, id]).then(() => getById(id)); //

  return Tweet.findByPk(id, INCLUDE_USER) //
    .then((tweet) => {
      tweet.text = text;
      return tweet.save();
    });
}

export async function remove(id) {
  // tweets = tweets.filter((tweet) => tweet.id !== id);
  // return db.execute("DELETE FROM tweets WHERE id=?", [id]);

  return Tweet.findByPk(id, INCLUDE_USER) //
    .then((tweet) => {
      tweet.destroy();
    });
}
