import { sendMessage } from '../telegram';
import { closeChat } from '../model/chat';

export default (message, chatId, otherChatId) => {
  if (otherChatId) {
    console.info(`${chatId} close chat with ${otherChatId}`);
    sendMessage('Собеседник прервал чат', otherChatId);
    sendMessage('Вы прервали чат', chatId);
    closeChat(chatId)
  } else
    sendMessage('Чтоб прервать чат, его нужно начать.', chatId);
};