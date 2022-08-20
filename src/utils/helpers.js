import { TOKEN } from './constants/common'

export const saveToken = (token) => localStorage.setItem(TOKEN, JSON.stringify(token))

export const getToken = () => JSON.parse(localStorage.getItem(TOKEN))

export const removeToken = () => localStorage.removeItem(TOKEN)

export const formatNumbers = (number) => number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')

export const orderSearchUrl = ({
  rowsPerPage, pageNumber, search, status, shippName, tempSortBy,
}) => {
  let searchUrl = `/orders?limit=${rowsPerPage}&page=${pageNumber}&sort_column=${tempSortBy.name.columnName}&sort_table_name=${tempSortBy.name.tableName}&sort_order=${tempSortBy.sortOrder}`

  if (search) searchUrl += `&name=${search}`

  if (status) searchUrl += `&order_status=${status}`

  if (shippName) searchUrl += `&shipper=${shippName}`

  return searchUrl
}

export const inventorySearchUrl = ({
  rowsPerPage, pageNumber, tempSortBy, name, tempOperator, price,
}) => {
  let searchUrl = `/inventories?limit=${rowsPerPage}&page=${pageNumber}&sort_column=${tempSortBy.name.columnName}&sort_table_name=${tempSortBy.name.tableName}&sort_order=${tempSortBy.sortOrder}`

  if (name) searchUrl += `&name=${name}`

  if (tempOperator) searchUrl += `&operator=${tempOperator}`

  if (price) searchUrl += `&price=${price}`

  return searchUrl
}
