const fs = require("fs");

const readStream = fs.createReadStream("./file.txt", {
  highWaterMark: 8,
  encoding: "UTF-8",
});

readStream.on("data", (chunk) => {
  // console.log(chunk);
  console.count("data");
});

readStream.on("error", (error) => {
  console.log(error);
});
