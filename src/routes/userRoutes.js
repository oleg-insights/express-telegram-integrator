const express = require('express')
const router = express.Router()
const { sendNotification } = require('../services/telegramService')
const { fetchExternalUser } = require('../services/userService')

router.get('/:id', async (req, res) => {
    const userId = req.params.id
    
    try {
        const user = await fetchExternalUser(userId)

        await sendNotification(`✅ Нашли юзера <b>${user.name}</b>`)

        res.json({success: true, data: user})

    } catch (error) {
        const status = error.response?.status || 500

        await sendNotification(`❌ Ошибка поиска юзера id${userId}: ${error.message}`)

        res.status(status).json({
            success: false,
            message: 'Ошибка при обработке запроса'
        })
    }
})

module.exports = router