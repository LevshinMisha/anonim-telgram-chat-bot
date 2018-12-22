import Bot, { Message, File } from 'telegram-api';
 
const bot = new Bot({ token: '413121960:AAE2_z-PLg2uwo_NMfcMwThjGN86QcDKE6E' });

const debugChat = false;
 
bot.start();

const sendMessage = (text, to) => bot.send(new Message().text(text).to(to));

const sendDebug = text => debugChat ? sendMessage(JSON.stringify(text), debugChat) : null;

bot.command('start', message => {

})
 
bot.get('', message => {
  debugChat = message.chat.id;
  sendDebug(message);
  sendMessage(`Зачем ты мне пишешь? ${message.chat.id}`, message.chat.id);
});