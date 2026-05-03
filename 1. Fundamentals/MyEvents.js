const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

eventEmitter.on("welcome", (name) => {
  console.log(`Welcome ${name}`);
});

eventEmitter.once("pushAlert", (alertCode) => {
  console.log(`Will only work once ${alertCode}`);
});

eventEmitter.emit("welcome", "Saunak");
eventEmitter.emit("pushAlert", 1);
eventEmitter.emit("pushAlert", 2);
