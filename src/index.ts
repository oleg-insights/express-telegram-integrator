import express, { Application } from 'express'
import config from './config'
import userRoutes from './routes/userRoutes'

const app: Application = express()

app.use(express.json())
app.use('/users', userRoutes)

const PORT: number = Number(config.port) || 3000

app.listen(PORT, () => {
    console.log(`Сервер запущен, порт: ${config.port}`)
})