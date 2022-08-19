import instance from 'api'

const fetchAllOrders = (
  rowsPerPage,
  pageNumber,
  searchValue,
  orderStatus,
  shipper,
  { name, sortOrder },
) => {
  let searchUrl = `/orders?limit=${rowsPerPage}&page=${pageNumber}&sort_column=${name.columnName}&sort_table_name=${name.tableName}&sort_order=${sortOrder}`

  if (searchValue) {
    searchUrl += `&name=${searchValue}`
  }

  if (orderStatus) {
    searchUrl += `&order_status=${orderStatus}`
  }

  if (shipper) {
    searchUrl += `&shipper=${shipper}`
  }

  return instance
    .get(searchUrl)
    .then((response) => response.data)
    .catch(() => ({}))
}
export default fetchAllOrders
