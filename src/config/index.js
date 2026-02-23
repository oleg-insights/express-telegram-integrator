require('dotenv').config()

module.exports = {
    port: process.env.PORT || 3000,
    telegram: {
        token: process.env.TG_TOKEN,
        chatId: process.env.TG_CHAT_ID
    },
    apis: {
        jsonplaceholderUrl: 'https://jsonplaceholder.typicode.com'
    }
}