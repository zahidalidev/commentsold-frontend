import instance from 'api'

export const getAllProducts = (rowsPerPage, pageNumber, sortBy) => (
  instance.get(`products/?limit=${rowsPerPage}&page=${pageNumber}&sort_column=${sortBy.sortColumn}&sort_order=${sortBy.sortOrder}`)
    .then(response => response.data)
    .catch(() => {})
)

export const getProduct = (id) => (
  instance.get(`/products/${id}`)
    .then(response => response.data)
    .catch(() => {})
)

export const removeProducts = (id) => instance.delete(`/products/${id}`).then(response => response.data).catch(() => {})

export const addProducts = (body) => instance.post('/products', body).then(response => response.data).catch(() => {})

export const updateProducts = (body, id) => instance.put(`/products/${id}`, body).then(response => response.data).catch(() => {})
