import axios from 'axios'

const userEndpoint = `${process.env.REACT_APP_BASE_URL}v1`

const login = (body) => axios.post(`${userEndpoint}/auth/login`, {
  email: body.email,
  password: body.password,
})

export default login
