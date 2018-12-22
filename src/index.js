import initApi from './api';
import { getOtherUser } from './model/chat';
import messageHandler from './handlers/message';
import startHandler from './handlers/start';
import finishHandler from './handlers/finish';

const bot = initApi('413121960:AAE2_z-PLg2uwo_NMfcMwThjGN86QcDKE6E');

const setHandler = handler => message => {
  const chatId = message.chat.id;
  const otherChatId = getOtherUser(chatId);
  const { text } = message;
  return handler(message, chatId, otherChatId, text);
};

bot.command('start', setHandler(startHandler));
bot.command('finish', setHandler(finishHandler));
bot.get('', setHandler(messageHandler));