import axios from 'axios'

const inventoryEndpoint = `${process.env.REACT_APP_BASE_URL}v1`

export const getInventories = (token) => axios.get(`${inventoryEndpoint}/inventories`, {
  headers: {
    'access-token': token,
  },
})

export const getUsers = () => axios.get(inventoryEndpoint)
