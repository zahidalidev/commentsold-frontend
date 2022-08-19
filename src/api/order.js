import instance from 'api'

const getAllOrders = (rowsPerPage, pageNumber, name, orderStatus, shipper, sortBy) => {
  const page = pageNumber - 1
  let searchUrl = `/orders/?limit=${rowsPerPage}&page=${page}&sort_column=${sortBy.sortColumn}&sort_order=${sortBy.sortOrder}`

  if (name) {
    searchUrl += `&name=${name}`
  }

  if (orderStatus) {
    searchUrl += `&order_status=${orderStatus}`
  }

  if (shipper) {
    searchUrl += `&shipper=${shipper}`
  }

  return instance.get(searchUrl).then(response => response.data).catch(() => {})
}
export default getAllOrders
