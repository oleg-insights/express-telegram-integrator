# Express Telegram Integrator

Сервис на Node.js и TypeScript для интеграции внешних данных с Telegram-ботом и сбора логов.

### О проекте
Демонстрация микросервиса с разделением слоев и интеграцией базы данных (SQLite/Prisma)

### Инструменты
* **TypeScript**
* **Node.js** / **Express**
* **PrismaORM (Raw SQL)**
* **SQLite**
* **Axios**
* **dotenv**

### Архитектура
* `src/config/` — конфигурация.
* `src/lib/` — инициализация Prisma.
* `src/services/` — логика и API (Telegram, JSONPlaceholder).
* `src/routes/` — эндпоинты.
* `src/types/` — интерфейсы.

### Запуск
1. Склонировать репозиторий.
2. Установить зависимости: `npm install`.
3. Переименовать `.env.example` в `.env` и указать свои данные.
4. Подготовить БД: `npx prisma db push`.
5. Запустить: `npx tsx src/index.ts`.

### Запросы
1. Найти пользователя: `GET /users/1`.
2. Просмотреть статистику запросов: `GET /analytics/logs`