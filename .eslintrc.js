module.exports = {
  extends: [
    '@mate-academy/eslint-config',
    'plugin:cypress/recommended',
    'prettier',
  ],

  rules: {
    // Переопределяем кавычки на одинарные
    quotes: ['error', 'single'],
    // Если линтер ругается на точки с запятой, тоже можно зафиксировать:
    semi: ['error', 'always'],
  },
};
