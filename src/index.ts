import express, { Application } from 'express'
import config from './config'
import userRoutes from './routes/userRoutes'
import analyticsRoutes from './routes/analyticsRoutes'

const app: Application = express()

app.use(express.json())
app.use('/users', userRoutes)
app.use('/analytics', analyticsRoutes)

const PORT: number = Number(config.port) || 3000

app.listen(PORT, () => {
    console.log(`Сервер запущен, порт: ${config.port}`)
})