import instance from 'api'
import { orderSearchUrl } from 'utils/helpers'

const fetchAllOrders = (params) => instance
  .get(orderSearchUrl(params))
  .then((response) => response.data)
  .catch(() => ({}))

export default fetchAllOrders
