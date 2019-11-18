const axios = require("axios");

export async function getChat(chatName, current) {
  const response = await axios.get(
    `https://chatapi.mayloop.com/chatroom/${chatName}/${current}`
  );
  return await response;
}

export async function newRoom(chatroom) {
  const response = await axios.put(`https://chatapi.mayloop.com/chatroom`, {
    chatroom: chatroom
  });
  return await response;
}

export async function sendMessage(chatroom, username, message) {
  const response = await axios.put(
    `https://chatapi.mayloop.com/chatroom/${chatroom}`,
    {
      username,
      message
    }
  );
  return await response;
}
