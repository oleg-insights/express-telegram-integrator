const express = require('express')
const config = require('./src/config/')
const userRoutes = require('./src/routes/userRoutes')

const app = express()

app.use(express.json())
app.use('/users', userRoutes)

app.listen(config.port, () => {
    console.log(`Сервер запущен, порт: ${config.port}`)
})