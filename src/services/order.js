import axios from 'axios'

const orderEndpoint = `${process.env.REACT_APP_BASE_URL}v1`

export const getAllOrders = (token, rowsPerPage, pageNumber) => axios.get(`${orderEndpoint}/orders/?product_name=${rowsPerPage}&page=${pageNumber}`, {
  headers: {
    'access-token': token,
  },
})

export const searchOrders = (token, productName) => axios.get(`${orderEndpoint}/orders/?productName=${productName}`, {
  headers: {
    'access-token': token,
  },
})

export const filterOrdersByStatus = (token, status) => axios.get(`${orderEndpoint}/orders/?productName=${status}`, {
  headers: {
    'access-token': token,
  },
})
