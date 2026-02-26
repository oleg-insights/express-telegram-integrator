# Express Telegram Integrator

Сервис на Node.js и TypeScript для интеграции внешних данных с Telegram-ботом.

### О проекте
Демонстрация масштабируемого микросервиса с разделением слоев.

### Инструменты
* **TypeScript**
* **Node.js** / **Express**
* **Axios**
* **dotenv**

### Архитектура
* `src/config/` — конфигурация.
* `src/services/` — логика и API (Telegram, JSONPlaceholder).
* `src/routes/` — эндпоинты.

### Запуск
1. Склонировать репозиторий.
2. Установить зависимости: `npm install`.
3. Создать файл `.env` и добавить свои токен бота, ID чата, порт (TG_TOKEN: str, TG_CHAT_ID: num, PORT: num)
4. Запустить: `npx tsx src/index.ts`.
5. Найти пользователя: `GET /users/1`