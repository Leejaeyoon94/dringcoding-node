let num = 1;
const interval = setInterval(() => {
  console.log(num++);
}, 1000);

setTimeout(() => {
  console.log("TIME OUT!");
  clearInterval(interval);
}, 6000);
