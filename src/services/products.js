import axios from 'axios'

const userEndpoint = `${process.env.REACT_APP_BASE_URL}v1`

export const getAllProducts = (token) => axios.get(`${userEndpoint}/products`, {
  headers: {
    'access-token': token,
  },
})

export const getUsers = () => axios.get(userEndpoint)
