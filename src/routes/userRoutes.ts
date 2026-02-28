import { Router, Request, Response } from 'express'
import { sendNotification } from '../services/telegramService'
import { fetchExternalUser } from '../services/userService'
import { ExternalUser } from '../types/users'
import prisma from '../lib/prisma'

const router: Router = Router()

router.get('/:id', async (req: Request, res: Response<{success: boolean, data?: ExternalUser, message?: string}>): Promise<void> => {
    const userId: number = Number(req.params.id)
    
    try {
        const user: ExternalUser = await fetchExternalUser(userId)

        console.log('Запись в БД..')

        const dbUser = await prisma.user.upsert({
            where: { id: Number(user.id) },
            update: { name: user.name },
            create: {
                id: Number(user.id),
                name: user.name
            }
        })

        const log = await prisma.userLog.create({
            data: {
                action: 'Запрос пользователя',
                userAgent: req.headers['user-agent'] || 'unknown agent',
                userId: dbUser.id
            }
        })

        console.log('Запись создана, id:' + log.id)

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