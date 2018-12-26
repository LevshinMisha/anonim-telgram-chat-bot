import { sendMessage } from '../telegram';
import { clearQuery, queryContains } from '../model/query';
import { noCurrentChat } from './utils';

export default noCurrentChat((message, chatId) => {
  if (queryContains(chatId)) {
    clearQuery();
    sendMessage('Поиск остановлен.', chatId);
  } else
    sendMessage('Чтобы остановить поиск, его нужно начать.', chatId);
});