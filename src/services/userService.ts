import axios, { AxiosResponse } from 'axios'
import config from '../config'

export interface ExternalUser {
    id: number,
    name: string
}

const fetchExternalUser = async (userId: number): Promise<ExternalUser> => {
    console.log(`Поиск юзера id${userId}`)
    
    try {
        const response: AxiosResponse = await axios.get(`${config.apis.jsonplaceholderUrl}/users/${userId}`)

        return {
            id: userId,
            name: response.data.name
        }
    } catch (error: any) {
        console.error('User service:', error.response?.data || error.message)
        throw error
    }
}

export { fetchExternalUser }