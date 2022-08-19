import instance from 'api'
// import { toast } from 'react-toastify'

const getInventories = (
  rowsPerPage,
  pageNumber,
  searchValue,
  operator,
  price,
  { name, sortOrder },
) => {
  let searchUrl = `/inventories?limit=${rowsPerPage}&page=${pageNumber}&sort_column=${name.columnName}&sort_table_name=${name.tableName}&sort_order=${sortOrder}`

  if (searchValue) {
    searchUrl += `&name=${searchValue}`
  }

  if (operator) {
    searchUrl += `&operator=${operator}`
  }

  if (price) {
    searchUrl += `&price=${price}`
  }

  return instance
    .get(searchUrl)
    .then((response) => response.data)
    .catch(() => ({}))
}

export default getInventories
