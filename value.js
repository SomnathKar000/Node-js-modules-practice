const EventEmitter = require("events");

class Events extends EventEmitter {
  name = () => {
    console.log("hELLO WORLD");
    this.emit("message", { name: "SOMNATH KAR", roll: 24 });
  };
}

module.exports = Events;
