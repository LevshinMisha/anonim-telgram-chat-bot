import { sendMessage, sendDebug } from '../api';
import { closeChat } from '../model/chat';

export default (message, chatId, otherChatId) => {
  if (otherChatId) {
    sendMessage('Собеседник прервал чат', otherChatId);
    sendMessage('Вы прервали чат', chatId);
    closeChat(chatId)
  } else
    sendMessage('Чтоб прервать чат, его нужно начать.\nИспользуйте /start для начала поиска.', chatId);
}