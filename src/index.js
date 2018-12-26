import Bot from './bot';
import messageHandler from './handlers/message';
import startHandler from './handlers/start';
import finishHandler from './handlers/finish';
import debugHandler from './handlers/debug';
import stopHandler from './handlers/stop';
import questionHandler from './handlers/question';

import startServer from './server';

const bot = new Bot('413121960:AAE2_z-PLg2uwo_NMfcMwThjGN86QcDKE6E');
bot.onCommand('start', startHandler);
bot.onCommand('stop', stopHandler);
bot.onCommand('finish', finishHandler);
bot.onCommand('debug', debugHandler);
bot.onCommand('question', questionHandler);
bot.onMessage('', messageHandler);

startServer();
