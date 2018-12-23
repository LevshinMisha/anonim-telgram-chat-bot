import { sendMessage, sendDebug } from '../api';

export default (message, chatId, otherChatId, text) => {
  if (otherChatId)
    sendMessage(text, otherChatId);
  else 
    sendMessage(`Чат еще не начат.\nВаше сообщение никто не получил.\nОтправьте команду /start, чтобы встать в очередь.`, chatId);
}