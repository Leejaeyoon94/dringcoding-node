const fs = require("fs");

try {
  fs.renameSync("./text.txt", "./text-new.txt");
} catch (error) {
  console.log(error);
}
console.log("hello");

fs.rename("./text-new.txt", "./text.txt", (error) => {
  console.log(error);
});
console.log("hello");

fs.promises
  .rename("./text2.txt", "./test-new.txt")
  .then(() => console.log("done"))
  .catch(console.error);
