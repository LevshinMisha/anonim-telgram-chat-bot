import { sendDebug } from '../telegram';
import { getQuery } from '../model/query';
import { getChats } from '../model/chat';

export default (message, chatId, otherChatId) => sendDebug(chatId, otherChatId, getChats(), getQuery());