const axios = require("axios");

export async function getChat(chatName, current) {
  const response = await axios.get(
    `http://localhost:7887/chatroom/${chatName}/${current}`
  );
  return await response;
}

export async function newRoom(chatroom) {
  const response = await axios.put(`http://localhost:7887/chatroom`, {
    chatroom: chatroom
  });
  return await response;
}

export async function sendMessage(chatroom, username, message) {
  const response = await axios.put(
    `http://localhost:7887/chatroom/${chatroom}`,
    {
      username,
      message
    }
  );
  return await response;
}
