import { sendMessage } from "../telegram";

export const noCurrentChat = func => (message, chatId, otherChatId, ...args) => {
  if (!otherChatId)
    func(message, chatId, otherChatId, ...args);
  else
    sendMessage('Для начала закончи текущую беседу.', chatId);
}