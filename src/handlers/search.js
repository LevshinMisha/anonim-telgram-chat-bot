import { sendMessage } from '../telegram';
import { clearQuery, addToQuery, getQuery } from '../model/query';
import { openChat } from '../model/chat';
import { noCurrentChat } from './utils';
import { getUsernamePlaceholder } from '../utils';

const sendSearchFinishMessage = (from, to) => sendMessage([
  'Поиск успешно завершен.',
  `Ваш собеседник: ${getUsernamePlaceholder(from)}.`
].join('\n'), to);

export default noCurrentChat((message, chatId) => {
  sendMessage('Начинаем поиск.', chatId);
  console.info(`${chatId} start search`);
  const queryChat = getQuery();
  if (queryChat) {
    if (queryChat !== chatId) {
      console.info(`${chatId} and ${queryChat} connected`);
      openChat(queryChat, chatId);
      clearQuery();
      sendSearchFinishMessage(queryChat, chatId);
      sendSearchFinishMessage(chatId, queryChat);
    } else {
      console.info(`${chatId} already in query`);
      sendMessage('Уже ищу!', chatId);
    }
  } else {
    console.info(`${chatId} add to query`);
    addToQuery(chatId);
  }
    
})