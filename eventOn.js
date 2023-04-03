const Events = require("./value");
const emitter = new Events();

emitter.on("message", (e) => {
  console.log("An event occured bY " + e.name);
});

emitter.name();
