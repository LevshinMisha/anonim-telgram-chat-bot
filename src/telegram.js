import Bot, { Message } from 'telegram-api';
import { getUsernamePlaceholder } from './utils';

let bot = null;

export default token => {
  if (bot === null) {
    bot = new Bot({ token })
    bot.start();
  }
  return bot;
};

const wrapUserText = (text, from) => `${getUsernamePlaceholder(from)}: "${text}"`;

export const sendMessage = (text, to, from = null) => {
  bot.send(new Message().text(from ? wrapUserText(text, from) : text).to(to));
};

export const sendMessages = (text, chats, from = null) => {
  chats.forEach(chat => sendMessage(text, chat, from));
}

const sendDebugMessage = (text, chatId, obj = null) => {
  sendMessage(text, chatId);
  if (obj !== null)
    sendMessage(JSON.stringify(obj), chatId);
}
  
export const sendDebug = (chatId, otherChatId, chats, query) => {
  sendDebugMessage('chats', chatId, chats);
  sendDebugMessage('query', chatId, query);
  sendDebugMessage('current chat', chatId, { chatId, otherChatId });
  sendDebugMessage('qctf', chatId, { flag: "ТЫ ДУМАЕШЬ, ЧТО ВСЕ ТАК ПРОСТО?"})
};

