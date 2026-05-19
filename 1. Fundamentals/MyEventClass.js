const EventEmitter = require("events");

class Chat extends EventEmitter {
  sendMessage(message) {
    console.log(`Sending message ${message}`);
    this.emit("sendMessage", message);
  }
}

const chat = new Chat();
chat.on("sendMessage", (message) => {
  console.log(`Message has been sent : ${message}`);
});

chat.sendMessage("New message");
