import axios from 'axios'

const inventoryEndpoint = `${process.env.REACT_APP_BASE_URL}v1`

const getInventories = (token, rowsPerPage, pageNumber, name, operator, price) => {
  const page = pageNumber - 1
  let searchUrl = `${inventoryEndpoint}/inventories/?limit=${rowsPerPage}&page=${page}`
  if (name) {
    searchUrl += `&name=${name}`
  }

  if (operator) {
    searchUrl += `&operator=${operator}`
  }

  if (price) {
    searchUrl += `&price=${price}`
  }

  return axios.get(searchUrl, {
    headers: {
      'access-token': token,
    },
  })
}

export default getInventories
