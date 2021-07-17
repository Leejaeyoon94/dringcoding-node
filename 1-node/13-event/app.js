const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("yoon", (args) => {
  console.log("first callback -", args);
});

emitter.on("yoon", (args) => {
  console.log("second callback -", args);
});

emitter.emit("yoon", { message: 1 });
emitter.emit("yoon", { message: 2 });
emitter.removeAllListeners();
emitter.emit("yoon", { message: 3 });
// emitter.on("yoon", (args) => {
//   console.log("third callback-", args);
// });
