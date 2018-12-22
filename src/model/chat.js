const chat = {};

export const getOtherUser = userId => chat[userId];

export const isUserInChat = userId => !!chat[userId];

export const openChat = (user1, user2) => {
  chat[user1] = user2;
  chat[user2] = user1;
}

export const closeChat = user => {
  delete chat[chat[user]];
  delete chat[user];
}