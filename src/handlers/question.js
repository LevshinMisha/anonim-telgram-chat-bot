import { sendQuestion } from '../telegram';

export default (message, chatId) => {
  sendQuestion('', chatId);
};