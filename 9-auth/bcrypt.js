const bcrypt = require("bcrypt");

const password = "abcd1234";

const hashed = bcrypt.hashSync(password, 10);
console.log(`Password: ${password}, hashed: ${hashed}`);

const result = bcrypt.compareSync("abcd1234", hashed);
console.log(result);
