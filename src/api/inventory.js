import instance from 'api'
import { inventorySearchUrl } from 'utils/helpers'

const fetchInventories = (params) => instance
  .get(inventorySearchUrl(params))
  .then((response) => response.data)
  .catch(() => ({}))

export default fetchInventories
