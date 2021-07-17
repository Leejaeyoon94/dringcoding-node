const http = require("http");
const fs = require("fs");
const ejs = require("ejs");
// console.log(http.STATUS_CODES);
// console.log(http.METHODS);
const name = "jaeyoon";
const courses = [{ name: "HTML" }, { name: "CSS" }, { name: "JS" }, { name: "Node" }];

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    ejs.renderFile("./template/index.ejs", { name }).then((data) => res.end(data));
  } else if (url === "/courses") {
    ejs.renderFile("./template/courses.ejs", { courses }).then((data) => res.end(data));
  } else {
    ejs.renderFile("./template/not-found.ejs", { name }).then((data) => res.end(data));
  }
  //   res.write("Welcome");
});

server.listen(8080);
