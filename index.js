import Bot, { Message, File } from 'telegram-api';
 
const bot = new Bot({ token: '413121960:AAE2_z-PLg2uwo_NMfcMwThjGN86QcDKE6E' });

const chats = {};

let queryChat = null;
 
bot.start();

const sendMessage = (text, to) => bot.send(new Message().text(text).to(to));

const sendMessages = (text, chats) => chats.forEach(chat => sendMessage(text, chat));

bot.command('start', message => {
  const yourChatId = message.chat.id;
  sendMessage('Начинаем поиск', yourChatId);
  if (queryChat) {
    sendMessages('Поиск успешно завершен', [queryChat, yourChatId]);
    sendMessages('Можете начинать общение', [queryChat, yourChatId]);
    queryChat = null;
    chats[queryChat] = yourChatId;
    chats[yourChatId] = queryChat;
  } else
    queryChat = message.chat.id;
});

bot.command('finish', message => {
  const yourChatId = message.chat.id;
  if (chats[yourChatId]) {
    const otherChatId = chats[yourChatId];
    sendMessage('Собеседник прервал чат', otherChatId);
    sendMessage('Вы прервали чат', yourChatId);
    delete chats[yourChatId];
    delete chats[otherChatId];
  } else
    sendMessage('Чтоб прервать чат, его нужно начать', yourChatId);
})
 
bot.get('', message => {
  const yourChatId = message.chat.id;
  const otherChatId = chats[yourChatId];
  if (otherChatId)
    sendMessage(message.chat.text, otherChatId);
  else 
    sendMessage(`Чат еще не начат. Ваше сообщение никто не получил. Отправьте команду /start, чтобы встать в очередь`, yourChatId);
});