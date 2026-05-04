const EventEmitter = require("events");

class ChatRoom extends EventEmitter {
  constructor() {
    super();
    this.users = new Set();
  }

  join(user) {
    this.users.add(user);
    this.emit("join", user);
  }
  sendMessage(user, message) {
    if (this.users.has(user)) {
      this.emit("message", user, message);
    } else {
      console.log("User is not in the room");
    }
  }

  leave(user) {
    if (this.users.has(user)) {
      this.users.delete(user);
      this.emit("leave", user);
    } else {
      console.log("The user doesn't exist");
    }
  }
}

module.exports = ChatRoom;
