const jwt = require("jsonwebtoken");

const secret = "dfasfadsfdasf";
const token = jwt.sign(
  {
    id: "userId",
    isAdmin: true,
  },
  secret,
  { expiresIn: 2 } //만료 옵션
);
jwt.verify(token, secret, (error, decoded) => {
  console.log(error, decoded);
});

console.log(token);
