import dotenv from 'dotenv'
dotenv.config()

interface Config {
    port: number;
    telegram: {
        token: string,
        chatId: number
    };
    apis: {
        jsonplaceholderUrl: string
    };
}

const config: Config = {
    port: Number(process.env.PORT) || 3000,
    telegram: {
        token: String(process.env.TG_TOKEN),
        chatId: Number(process.env.TG_CHAT_ID)
    },
    apis: {
        jsonplaceholderUrl: 'https://jsonplaceholder.typicode.com'
    }
}

export default config