import { Router, Request, Response } from 'express'
import { sendNotification } from '../services/telegramService'
import { fetchExternalUser, ExternalUser } from '../services/userService'

const router: Router = Router()

router.get('/:id', async (req: Request, res: Response<{success: boolean, data?: ExternalUser, message?: string}>): Promise<void> => {
    const userId: number = Number(req.params.id)
    
    try {
        const user: ExternalUser = await fetchExternalUser(userId)

        await sendNotification(`✅ Нашли юзера <b>${user.name}</b>`)

        res.json({success: true, data: user})

    } catch (error: any) {
        const status: number = error.response?.status || 500

        await sendNotification(`❌ Ошибка поиска юзера id${userId}: ${error.message}`)

        res.status(status).json({
            success: false,
            message: 'Ошибка при обработке запроса'
        })
    }
})

export default router