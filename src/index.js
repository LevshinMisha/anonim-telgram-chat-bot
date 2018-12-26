import Bot from './bot';
import messageHandler from './handlers/message';
import startHandler from './handlers/start';
import finishHandler from './handlers/finish';
import debugHandler from './handlers/debug';

const bot = new Bot('413121960:AAE2_z-PLg2uwo_NMfcMwThjGN86QcDKE6E');

bot.onCommand('start', startHandler);
bot.onCommand('finish', finishHandler);
bot.onCommand('debug', debugHandler);
bot.onMessage('', messageHandler);

require('http').createServer((req, res) => {
  res.write(req.url === '/ping' ? 'pong' : 'Hello World!');
  res.end();
}).listen(8080); // Для now, чтоб не перезапускалось каждые 5 минут.
