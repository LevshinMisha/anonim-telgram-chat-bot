import initApi from './telegram';
import { getOtherUser } from './model/chat';
import messageHandler from './handlers/message';
import startHandler from './handlers/start';
import finishHandler from './handlers/finish';
import debugHandler from './handlers/debug';

const bot = initApi('413121960:AAE2_z-PLg2uwo_NMfcMwThjGN86QcDKE6E');

const setHandler = handler => message => {
  const chatId = message.chat.id;
  const otherChatId = getOtherUser(chatId);
  const { text } = message;
  return handler(message, chatId, otherChatId, text);
};

bot.command('start', setHandler(startHandler));
bot.command('finish', setHandler(finishHandler));
bot.command('debug', setHandler(debugHandler));
bot.get('', setHandler(messageHandler));

require('http').createServer((req, res) => {
  res.write(req.url === '/ping' ? 'pong' : 'Hello World!');
  res.end();
}).listen(8080); // Для now, чтоб не перезапускалось каждые 5 минут.
