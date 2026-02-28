import { Router, Request, Response } from 'express'
import { LogsRow } from '../types/analytics'
import prisma from '../lib/prisma'

const router: Router = Router()

interface DbResponseRow {
    userId: number;
    userName: string;
    rowsPerUser: bigint;
    totalRows: bigint;
    createdAt: bigint | null;
}

router.get('/logs', async (req: Request, res: Response): Promise<void> => {
    try {
        const stats = await prisma.$queryRaw<DbResponseRow[]>`
            SELECT
                userId,
                userName,
                COUNT(*) AS "rowsPerUser",
                (SELECT COUNT(*) FROM UserLog) AS "totalRows",
                MIN(createdAt) AS "createdAt"
            FROM
                UserLog
            GROUP BY
                userId, userName
        `

        const result: LogsRow[] = stats.map(row => ({
            ...row,
            createdAt: row.createdAt ? new Date(Number(row.createdAt)).toISOString() : null,
            rowsPerUser: row.rowsPerUser.toString(),
            totalRows: row.totalRows.toString()
        }))

        res.json(result)
    } catch (error: any) {
        const status: number = error.response?.status || 500

        res.status(status).json({
            success: false,
            message: 'Не удалось получить логи'
        })
    }
})

export default router