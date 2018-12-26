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
  console.info(`${chatId} to ${otherChatId} write:"${text}"`);
  if (otherChatId)
    sendMessage(text, otherChatId, chatId);
  else 
    sendMessage(noChatMessage, chatId);
}