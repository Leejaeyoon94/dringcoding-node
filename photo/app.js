const fs = require("fs");
const os = require("os");
const path = require("path");

const folder = process.argv[2];

const workingDir = path.join(os.homedir(), "Pictures", folder);
if (!folder || fs.existsSync(workingDir)) {
  console.error("please enter folder name in Pictures");
  return;
}

console.log(workingDir);
