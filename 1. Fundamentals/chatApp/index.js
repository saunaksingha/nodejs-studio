const ChatRoom = require("./chatRoom.js");

const chat = new ChatRoom();

chat.on("join", (user) => {
  console.log(`${user} has joined the chat`);
});

chat.on("message", (user, message) => {
  console.log(`${user} :  ${message}`);
});

chat.on("leave", (user) => {
  console.log(`${user} has left the chat`);
});

chat.join("Tom");
chat.join("Jerry");
chat.leave("Tom");
chat.sendMessage("Jerry", "How are you Tom?");
chat.sendMessage("Tom", "How are you Tom?");
