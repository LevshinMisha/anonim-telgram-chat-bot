import { sendMessage } from '../telegram';
import { clearQuery, queryContains } from '../model/query';
import { noCurrentChat } from './utils';

export default noCurrentChat((message, chatId) => {
  if (queryContains(chatId)) {
    console.info(`${chatId} stop search`);
    clearQuery();
    sendMessage('Поиск остановлен.', chatId);
  } else
    sendMessage('Чтобы остановить поиск, его нужно начать.', chatId);
});