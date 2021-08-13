// // // abcd1234: $2b$12$G9xf8SFq3oTEgdj7ozHQ/uhDOyeQcUEDU8tnOcvpvApuadr3nE5Vm
// // let users = [
// //   {
// //     id: "1",
// //     username: "bob",
// //     password: "$2b$12$G9xf8SFq3oTEgdj7ozHQ/uhDOyeQcUEDU8tnOcvpvApuadr3nE5Vm",
// //     name: "Bob",
// //     email: "bob@gmail.com",
// //     url: "https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png",
// //   },
// //   {
// //     id: "2",
// //     username: "lee",
// //     password: "$2b$12$G9xf8SFq3oTEgdj7ozHQ/uhDOyeQcUEDU8tnOcvpvApuadr3nE5Vm",
// //     name: "lee",
// //     email: "lee@gmail.com",
// //     url: "https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png",
// //   },
// // ];
// import { sequelize } from "../db/database.js";
// import SQ from "sequelize";
// const DataTypes = SQ.DataTypes;

// export const User = sequelize.define(
//   "user",
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       autoIncrement: true,
//       allowNull: false,
//       primaryKey: true,
//     },
//     username: {
//       type: DataTypes.STRING(45),
//       allowNull: false,
//     },
//     password: {
//       type: DataTypes.STRING(128),
//       allowNull: false,
//     },
//     name: {
//       type: DataTypes.STRING(128),
//       allowNull: false,
//     },
//     email: {
//       type: DataTypes.STRING(128),
//       allowNull: false,
//     },
//     url: DataTypes.TEXT,
//   },
//   { timestamps: false }
// );

// export async function findByUsername(username) {
//   return User.findOne({ where: { username } }); //sequ

//   //mysql
//   // return db.execute("SELECT * FROM users WHERE username=?", [username]).then((result) => result[0][0]);

//   // return users.find((user) => user.username === username);
// }

// export async function findById(id) {
//   return User.findByPk(id);

//   // return db.execute("SELECT * FROM users WHERE id=?", [id]).then((result) => result[0][0]);
//   // return users.find((user) => user.id === id);
// }

// // export async function createUser(user) {
// //   const created = { ...user, id: Date.now().toString() };
// //   users.push(created);
// //   return created.id;
// // }
// //기본

// //mysql

// export async function createUser(user) {
//   return User.create(user).then((data) => data.dataValues.id);
// }
// // const { username, password, name, email, url } = user;
// // return db.execute("INSERT INTO users (username, password, name, email, url) VALUES (?,?,?,?,?)", [username, password, name, email, url]).then((result) => result[0].insertId);
