import { sendMessage, sendDebug } from './api';
import { closeChat } from './model/chat';

export default (message, chatId, otherChatId) => {
  sendDebug('finish start', message);
  if (otherChatId) {
    sendMessage('Собеседник прервал чат', otherChatId);
    sendMessage('Вы прервали чат', chatId);
    closeChat(chatId)
  } else
    sendMessage('Чтоб прервать чат, его нужно начать', chatId);
  sendDebug('finish end', message);
}