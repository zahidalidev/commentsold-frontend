import axios from 'axios'

const userEndpoint = `${process.env.REACT_APP_BASE_URL}v1`

export const login = (body) => axios.post(`${userEndpoint}/auth/login`, {
  email: body.email,
  password_plain: body.password,
})

export const getUsers = () => axios.get(userEndpoint)