import axios from 'axios'

const inventoryEndpoint = `${process.env.REACT_APP_BASE_URL}v1`

export const getInventories = (token, rowsPerPage, pageNumber) => axios.get(`${inventoryEndpoint}/inventories?limit=${rowsPerPage}&page=${pageNumber}`, {
  headers: {
    'access-token': token,
  },
})

export const getUsers = () => axios.get(inventoryEndpoint)
