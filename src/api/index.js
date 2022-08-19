import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  timeout: 1000000,
})

instance.defaults.headers.common['access-token'] = localStorage.getItem('token')?.replaceAll('"', '')

export default instance
