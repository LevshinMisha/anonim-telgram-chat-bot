import { getOtherUser } from './chat';

const setHandler = handler => message => {
  const chatId = message.chat.id;
  const otherChatId = getOtherUser(chatId);
  const { text } = message;
  return handler(message, chatId, otherChatId, text);
};

export default class Bot {
  constructor(token) {
    this.bot = initApi(token);
  }

  onCommand(command, handler) {
    this.bot.command(command, setHandler(handler));
  }

  onMessage(pattern, handler) {
    this.bot.get(pattern, setHandler(handler));
  }
}