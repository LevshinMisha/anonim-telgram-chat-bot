import { sendMessage } from '../telegram';
import { addRequest, findRequest, hasRequest } from '../model/continue-requests';
import { closeChat } from '../model/chat';

const continueRequestMessage = [
  'Ваш собеседник предлагает продолжить общение вне этого чата.',
  'Используйте команду /continue чтобы принять приглашение.'
].join('\n')

const continueMessage = username => [
  'Вы получили это сообщение, так как вы и ваш собеседник решили продолжить общение.',
  'Можете найти своего собеседника в поиске.',
  `Его юзернэйм: @${username}`,
  'Ваш чат закончен.'
].join('\n');

export default (message, chatId, otherChatId) => {
  if (otherChatId) {
    if (hasRequest(chatId, otherChatId))
      sendMessage('Ваше предложение уже отправлено.', chatId);
    else {
      console.log(`${chatId}(${message.from.username}) continue ${otherChatId}`);
      addRequest(chatId, otherChatId, message.from.username);
      if (!hasRequest(otherChatId, chatId)) {
        sendMessage('Ваше предложение отправлено пользователю.', chatId);
        sendMessage(continueRequestMessage, otherChatId);
      }
    }
    if (hasRequest(otherChatId, chatId)) {
      closeChat(chatId);
      sendMessage(continueMessage(findRequest(chatId, otherChatId).username), otherChatId);
      sendMessage(continueMessage(findRequest(otherChatId, chatId).username), chatId);
    }
  } else
    sendMessage('Чтоб продолжить чат, его нужно начать.', chatId);
};