import Bot, { Message, File } from 'telegram-api';

let bot = null;
const debug = false;
const debugChatId = 439300584;

export default token => {
  if (bot === null) {
    bot = new Bot({ token })
    bot.start();
  }
  return bot;
};

export const sendMessage = (text, to) => bot.send(new Message().text(text).to(to));

export const sendMessages = (text, chats) => chats.forEach(chat => sendMessage(text, chat));

const sendDebugMessage = (text, obj = null) => {
  sendMessage(text, debugChatId);
  if (obj !== null)
    sendMessage(JSON.stringify(obj), debugChatId);
}
  
export const sendDebug = (route, message) => {
  if (debug) {
    const yourChatId = message.chat.id;
    const otherChatId = chats[yourChatId];
    sendDebugMessage(route);
    sendDebugMessage('chats', chats);
    sendDebugMessage('message', message);
    sendDebugMessage('query', queryChat);
    sendDebugMessage('finded chats', { yourChatId, otherChatId });
  }
};