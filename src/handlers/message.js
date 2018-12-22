import { sendMessage, sendDebug } from '../api';

export default (message, chatId, otherChatId, text) => {
  sendDebug('message', message);
  if (otherChatId)
    sendMessage(text, otherChatId);
  else 
    sendMessage(`Чат еще не начат. 
    Ваше сообщение никто не получил. 
    Отправьте команду /start, чтобы встать в очередь.`, chatId);
}