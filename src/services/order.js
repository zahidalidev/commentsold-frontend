import axios from 'axios'

const orderEndpoint = `${process.env.REACT_APP_BASE_URL}v1`

const getAllOrders = (token, rowsPerPage, pageNumber) => axios.get(`${orderEndpoint}/orders/?product_name=${rowsPerPage}&page=${pageNumber}`, {
  headers: {
    'access-token': token,
  },
})

export default getAllOrders
