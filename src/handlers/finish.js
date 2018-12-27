import { sendMessage } from '../telegram';
import { closeChat } from '../model/chat';
import { deleteRequests } from '../model/continue-requests';

export default (message, chatId, otherChatId) => {
  if (otherChatId) {
    closeChat(chatId);
    deleteRequests([chatId, otherChatId]);
    console.info(`${chatId} close chat with ${otherChatId}`);
    sendMessage('Собеседник прервал чат', otherChatId);
    sendMessage('Вы прервали чат', chatId);
  } else
    sendMessage('Чтоб прервать чат, его нужно начать.', chatId);
};