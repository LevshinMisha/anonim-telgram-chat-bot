import { sendDebug } from '../telegram';
import { getQuery } from '../model/query';
import { getChats } from '../model/chat';

export default (message, chatId, otherChatId) => {
  const query = getQuery();
  const chats = getChats();
  sendDebug(chatId, otherChatId, chats, query);
}