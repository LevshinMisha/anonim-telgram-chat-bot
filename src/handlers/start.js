import { sendMessage, sendMessages, sendDebug } from '../api';
import { clearQuery, addToQuery, getQuery } from '../model/query';
import { openChat } from '../model/chat';

export default (message, chatId, otherChatId) => {
  sendDebug('start start', message);
  if (!otherChatId) {
    sendMessage('Начинаем поиск', chatId);
    const queryChat = getQuery();
    if (queryChat) {
      if (queryChat !== chatId) {
        sendMessages('Поиск успешно завершен', [queryChat, chatId]);
        sendMessages('Можете начинать общение', [queryChat, chatId]);
        openChat(queryChat, chatId);
        clearQuery();
      } else
        sendMessage('Уже ищу!', chatId);
    } else 
      addToQuery(chatId);
  } else 
    sendMessage('Для начала закончи текущую беседу', chatId);
  
  sendDebug('start end', message);
}