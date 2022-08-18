import axios from 'axios'

const orderEndpoint = `${process.env.REACT_APP_BASE_URL}v1`

export const getAllOrders = (token, rowsPerPage, pageNumber) => axios.get(`${orderEndpoint}/orders/?limit=${rowsPerPage}&page=${pageNumber}`, {
  headers: {
    'access-token': token,
  },
})

export const getUsers = () => axios.get(orderEndpoint)
