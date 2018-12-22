import Bot, { Message, File } from 'telegram-api';
 
const bot = new Bot({ token: '413121960:AAE2_z-PLg2uwo_NMfcMwThjGN86QcDKE6E' });
 
bot.start();

const sendMessage = (text, to) => bot.send(new Message().text(text).to(to));
 
bot.get('', message => {
  console.log(message);
  sendMessage('Зачем ты мне пишешь?', message.chat.id);
});