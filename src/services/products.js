import axios from 'axios'

const productEndpoint = `${process.env.REACT_APP_BASE_URL}v1`

export const getAllProducts = (token) => axios.get(`${productEndpoint}/products`, {
  headers: {
    'access-token': token,
  },
})

export const removeProducts = (id, token) => axios.delete(`${productEndpoint}/products/${id}`, {
  headers: {
    'access-token': token,
  },
})
