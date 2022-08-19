import instance from 'api'

export const getAllProducts = (rowsPerPage, pageNumber, { name, sortOrder }) => (
  instance.get(`products/?limit=${rowsPerPage}&page=${pageNumber}&sort_column=${name.columnName}&sort_table_name=${name.tableName}&sort_order=${sortOrder}`)
    .then(response => response.data)
    .catch(() => ({}))
)

export const getProduct = (id) => (
  instance.get(`/products/${id}`)
    .then(response => response.data)
    .catch(() => ({}))
)

export const getProductStyles = () => (
  instance.get('/products/styles')
    .then(response => response.data)
    .catch(() => ({}))
)

export const getProductBrands = () => (
  instance.get('/products/brands')
    .then(response => response.data)
    .catch(() => ({}))
)

export const getProductTypes = () => (
  instance.get('/products/types')
    .then(response => response.data)
    .catch(() => ({}))
)

export const removeProducts = (id) => instance.delete(`/products/${id}`).then(response => response.data).catch(() => ({}))

export const addProducts = (body) => instance.post('/products', body).then(response => response).catch(() => ({}))

export const updateProducts = (body, id) => instance.put(`/products/${id}`, body).then(response => response).catch(() => ({}))
