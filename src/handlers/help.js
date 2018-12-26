import { sendMessage } from "../telegram";

const helpMessage = [
  "Список поддерживаемых команд.",
  "/help - показывает это сообщение.",
  "Вне чата:",
  "/search - для начала поиска собеседника.",
  "/stop - прекращение поиска собеседника.",
  "В чате:",
  "/finish - прекратить чат.",
  "/continue - предложить собеседнику продолжить общение в телеграмме.",
  "",
  'Хочу сообщить, что в целях "Безопасности и повышенной стабильности"(а вовсе не из-за моей лени), ваши звуковые сообщения, картинки, стикеры и видео пересланы собеседнику не будут.',
  'Пересылается только текст. Имейте это ввиду.'
].join('\n');

export default (message, chatId) => sendMessage(helpMessage, chatId);