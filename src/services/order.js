import axios from 'axios'

const orderEndpoint = `${process.env.REACT_APP_BASE_URL}v1`

const getAllOrders = (token, rowsPerPage, pageNumber, name, orderStatus, shipper) => {
  const page = pageNumber - 1
  console.log(pageNumber)
  let searchUrl = `${orderEndpoint}/orders/?limit=${rowsPerPage}&page=${page}`

  if (name) {
    searchUrl += `&name=${name}`
  }

  if (orderStatus) {
    searchUrl += `&order_status=${orderStatus}`
  }

  if (shipper) {
    searchUrl += `&shipper=${shipper}`
  }

  return axios.get(searchUrl, {
    headers: {
      'access-token': token,
    },
  })
}
export default getAllOrders
