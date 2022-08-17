import axios from 'axios'

const orderEndpoint = `${process.env.REACT_APP_BASE_URL}v1`

export const getAllOrders = (token) => axios.get(`${orderEndpoint}/orders`, {
  headers: {
    'access-token': token,
  },
})

export const getUsers = () => axios.get(orderEndpoint)
