const axios = require('axios')
const config = require('../config')

const fetchExternalUser = async (userId) => {
    console.log(`Поиск юзера id${userId}`)
    
    try {
        const response = await axios.get(`${config.apis.jsonplaceholderUrl}/users/${userId}`)

        return {
            id: userId,
            name: response.data.name
        }
    } catch (error) {
        console.error('User servise:', error.response?.data || error.message)
        throw error
    }
}

module.exports = {
    fetchExternalUser
}