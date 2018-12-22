import Bot, { Message, File } from 'telegram-api';
 
const bot = new Bot({ token: '413121960:AAE2_z-PLg2uwo_NMfcMwThjGN86QcDKE6E' });

const chats = {};

let queryChat = null;
 
bot.start();

const sendMessage = (text, to) => bot.send(new Message().text(text).to(to));

const sendMessages = (text, chats) => chats.forEach(chat => sendMessage(text, chat));

const sendDebugMessage = (text, obj = null) => {
  const ownerId = 439300584;
  sendMessage(text, ownerId);
  if (obj !== null)
    sendMessage(JSON.stringify(obj), ownerId);
}

const sendDebug = (route, message) => {
  const yourChatId = message.chat.id;
  const otherChatId = chats[yourChatId];
  sendDebugMessage(route);
  sendDebugMessage('chats', chats);
  sendDebugMessage('message', message);
  sendDebugMessage('query', queryChat);
  sendDebugMessage('finded chats', { yourChatId, otherChatId });
}

bot.command('start', message => {
  sendDebug('start start', message);
  const yourChatId = message.chat.id;
  sendMessage('Начинаем поиск', yourChatId);
  if (queryChat) {
    sendMessages('Поиск успешно завершен', [queryChat, yourChatId]);
    sendMessages('Можете начинать общение', [queryChat, yourChatId]);
    chats[queryChat] = yourChatId;
    chats[yourChatId] = queryChat;
    queryChat = null;
  } else
    queryChat = message.chat.id;
  sendDebug('start end', message);
});

bot.command('finish', message => {
  sendDebug('finish start', message);
  const yourChatId = message.chat.id;
  if (chats[yourChatId]) {
    const otherChatId = chats[yourChatId];
    sendMessage('Собеседник прервал чат', otherChatId);
    sendMessage('Вы прервали чат', yourChatId);
    delete chats[yourChatId];
    delete chats[otherChatId];
  } else
    sendMessage('Чтоб прервать чат, его нужно начать', yourChatId);
  sendDebug('finish end', message);
})
 
bot.get('', message => {
  const yourChatId = message.chat.id;
  const otherChatId = chats[yourChatId];
  sendDebug('message', message);
  if (otherChatId)
    sendMessage(message.chat.text, otherChatId);
  else 
    sendMessage(`Чат еще не начат. Ваше сообщение никто не получил. Отправьте команду /start, чтобы встать в очередь`, yourChatId);
});