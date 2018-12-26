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
  const queryChat = getQuery();
  if (queryChat) {
    if (queryChat !== chatId) {
      openChat(queryChat, chatId);
      clearQuery();
      sendSearchFinishMessage(queryChat, chatId);
      sendSearchFinishMessage(chatId, queryChat);
    } else
      sendMessage('Уже ищу!', chatId);
  } else
    addToQuery(chatId);
})