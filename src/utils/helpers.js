import { TOKEN } from './constants'

export const saveToken = (token) => localStorage.setItem(TOKEN, JSON.stringify(token))

export const getToken = () => JSON.parse(localStorage.getItem(TOKEN))

export const removeToken = () => localStorage.removeItem(TOKEN)

export const formatNumbers = (number) => number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
