import initApi from './telegram';

import Bot from './model/bot';

import messageHandler from './handlers/message';
import searchHandler from './handlers/search';
import finishHandler from './handlers/finish';
import debugHandler from './handlers/debug';
import stopHandler from './handlers/stop';
import helpHandler from './handlers/help';
import continueHandler from './handlers/continue';

export default () => {
  const bot = new Bot(initApi('413121960:AAE2_z-PLg2uwo_NMfcMwThjGN86QcDKE6E'));
  bot.onCommand('search', searchHandler);
  bot.onCommand('stop', stopHandler);
  bot.onCommand('continue', continueHandler);
  bot.onCommand('finish', finishHandler);
  bot.onCommand('debug', debugHandler);
  bot.onCommand('help', helpHandler);
  bot.onMessage('', messageHandler);
};
