const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

eventEmitter.on("welcome", (name) => {
  console.log(`Welcome ${name}`);
});

eventEmitter.emit("welcome", "Saunak");
