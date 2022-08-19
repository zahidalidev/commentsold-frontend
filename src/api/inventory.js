import instance from 'api'

const getInventories = (rowsPerPage, pageNumber, name, operator, price, sortBy) => {
  const page = pageNumber - 1
  let searchUrl = `/inventories/?limit=${rowsPerPage}&page=${page}&sort_column=${sortBy.sortColumn}&sort_order=${sortBy.sortOrder}`

  if (name) {
    searchUrl += `&name=${name}`
  }

  if (operator) {
    searchUrl += `&operator=${operator}`
  }

  if (price) {
    searchUrl += `&price=${price}`
  }

  return instance.get(searchUrl).then(response => response.data).catch(() => {})
}

export default getInventories
