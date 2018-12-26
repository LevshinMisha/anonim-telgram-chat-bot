import { sendMessage, sendMessages } from '../telegram';
import { clearQuery, addToQuery, getQuery } from '../model/query';
import { openChat } from '../model/chat';
import { noCurrentChat } from './utils';

export default noCurrentChat((message, chatId) => {
  const queryChat = getQuery();
  if (queryChat) {
    if (queryChat !== chatId) {
      sendMessages('Поиск успешно завершен', [queryChat, chatId]);
      sendMessages('Можете начинать общение', [queryChat, chatId]);
      openChat(queryChat, chatId);
      clearQuery();
    } else
      sendMessage('Уже ищу!', chatId);
  } else {
    addToQuery(chatId);
    sendMessage('Начинаем поиск', chatId);
  } 
})