const usernamePlaceholders = [
  'Неопознанный енот',
  'Неопознанная уточка',
  'Неопознанная черепаха',
  'Неопознанный лось',
  'Неопознанный удав',
  'Неопознанная тыква',
  'Неопознанная лягушка',
  'Неопознанный шакал',
  'Неопознанный чупакабра',
  'Неопознанный шакал'
];

export const getUsernamePlaceholder = chatId => {
  return usernamePlaceholders[chatId % usernamePlaceholders.length];
}