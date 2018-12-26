import { sendMessage } from '../telegram';

const noChatMessage = [
  'Чат еще не начат.',
  'Если вы не знаете что делать, воспользуйтесь командой /help'
].join('\n')

export default (message, chatId, otherChatId, text) => {
  if (otherChatId)
    sendMessage(text, otherChatId, chatId);
  else 
    sendMessage(noChatMessage, chatId);
}