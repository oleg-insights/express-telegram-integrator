const axios = require('axios')
const config = require('../config')

const sendNotification = async (message) => {
    const token = config.telegram.token
    const chatId = config.telegram.chatId

    if (!token || !chatId) return console.error('Telegram service: Параметры Telegram не найдены')

    const method = 'sendMessage'
    const url = `https://api.telegram.org/bot${token}/${method}`

    try {
        await axios.post(url, {
            chat_id: chatId,
            text: message,
            parse_mode: 'HTML'
        })
        console.log('Telegram service: Уведомление отправлено в Telegram')
    } catch (error) {
        console.error('Telegram service:', error.response?.data || error.message)
        throw error
    }
}

module.exports = {
    sendNotification
}