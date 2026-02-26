import axios from 'axios'
import config from '../config'

const sendNotification = async (message: string) => {
    const token: string = config.telegram.token
    const chatId: number = config.telegram.chatId

    if (!token || !chatId) {
        console.error('Telegram service: Параметры Telegram не найдены')
        return
    }

    const method: string = 'sendMessage'
    const url: string = `https://api.telegram.org/bot${token}/${method}`

    try {
        await axios.post(url, {
            chat_id: chatId,
            text: message,
            parse_mode: 'HTML'
        })
        console.log('Telegram service: Уведомление отправлено в Telegram')
    } catch (error: any) {
        console.error('Telegram service:', error.response?.data || error.message)
        throw error
    }
}

export { sendNotification }