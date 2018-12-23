import Bot, { Message, File } from 'telegram-api';

let bot = null;

export default token => {
  if (bot === null) {
    bot = new Bot({ token })
    bot.start();
  }
  return bot;
};

export const sendMessage = (text, to) => bot.send(new Message().text(text).to(to));

export const sendMessages = (text, chats) => chats.forEach(chat => sendMessage(text, chat));

const sendDebugMessage = (text, chatId, obj = null) => {
  sendMessage(text, chatId);
  if (obj !== null)
    sendMessage(JSON.stringify(obj), chatId);
}
  
export const sendDebug = (chatId, otherChatId, chats, query) => {
  sendDebugMessage('chats', chatId, chats);
  sendDebugMessage('query', chatId, query);
  sendDebugMessage('current chat', chatId, { chatId, otherChatId });
};