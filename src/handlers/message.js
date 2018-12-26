import { sendMessage } from '../telegram';

const noChatMessage = [
  'Чат еще не начат.',
  'Если вы не знаете что делать, воспользуйтесь командой /help'
].join('\n');

const noTextMessage = [
  'Собеседнику можно отправлять только текст.',
  'Пожалейте, пожалуйста, его психику.'
].join('\n');

export default (message, chatId, otherChatId, text) => {
  console.info(text);
  if (otherChatId)
    if (text)
      sendMessage(text, otherChatId, chatId);
    else {
      console.info(noTextMessage);
      sendMessage(noTextMessage, chatId);
    }
  else 
    sendMessage(noChatMessage, chatId);
}