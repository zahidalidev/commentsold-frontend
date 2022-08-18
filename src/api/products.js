import instance from 'api'

export const getAllProducts = (rowsPerPage, pageNumber) => (
  instance.get(`products/?limit=${rowsPerPage}&page=${pageNumber}`)
    .then(response => response.data)
    .catch(() => {})
)

export const getProduct = (id, token) => (
  instance.get(`/products/${id}`)
    .then(response => response.data)
    .catch(() => {})
})

export const removeProducts = (id, token) => instance.delete(`/products/${id}`, {
  headers: {
    'access-token': token,
  },
})

export const addProducts = (body, token) => instance.post('/products', body, {
  headers: {
    'access-token': token,
  },
})

export const updateProducts = (body, id, token) => instance.put(`/products/${id}`, body, {
  headers: {
    'access-token': token,
  },
})
