const fs = require("fs").promises;

fs.readFile("./text.txt", "utf8")
  .then((data) => console.log(data))
  .catch(console.error);

fs.writeFile("./text.txt", "hello,yoon").catch(console.error);

fs.appendFile("./text.txt", "hello,jaeyoon")
  .then(() => {
    fs.copyFile("./text.txt", "./text2.txt").catch(console.error);
  })
  .catch(console.error);

// fs.copyFile("./text.txt", "./text2.txt").catch(console.error);

fs.mkdir("sub-folder").catch(console.error);

fs.readdir("./").then(console.log).catch(console.error);
