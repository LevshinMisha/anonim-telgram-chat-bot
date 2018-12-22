import Bot, { Message, File } from 'telegram-api';
 
var bot = new Bot({
  token: '413121960:AAE2_z-PLg2uwo_NMfcMwThjGN86QcDKE6E'
});
 
bot.start();
 
bot.get(/Hi|Hey|Hello|Yo/, function(message) {
  var answer = new Message().text('Hello, Sir').to(message.chat.id);
  bot.send(answer);
});