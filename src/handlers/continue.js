import { sendMessage } from '../telegram';
import { addRequest } from '../model/continue-requests';

export default (message, chatId, otherChatId) => {
  if (otherChatId) {
    console.info(message);
    addRequest(chatId, otherChatId, message);
  } else
    sendMessage('Чтоб продолжить чат, его нужно начать.', chatId);
};