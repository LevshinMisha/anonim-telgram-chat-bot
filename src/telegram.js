import Bot, { Message } from 'telegram-api';

let bot = null;

export default token => {
  if (bot === null) {
    bot = new Bot({ token })
    bot.start();
  }
  return bot;
};

const usernamePlaceholders = [
  'Неопознанный енот',
  'Неопознанная уточка',
  'Неопознанная черепаха',
  'Неопознанный лось',
  'Неопознанный удав',
  'Неопознанная тыква',
  'Неопознанная лягушка',
  'Неопознанный шакал',
  'Неопознанный чупакабра',
  'Неопознанный шакал'
];

const wrapUserText = (text, from) => `${usernamePlaceholders[from % usernamePlaceholders.length]}: "${text}"`;

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
};

