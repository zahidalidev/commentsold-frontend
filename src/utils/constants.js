import Login from 'container/auth/login'
import Inventory from 'container/inventory'
import Products from 'container/products'

export const routeList = [
  {
    path: '/login',
    component: <Login />,
  },
  {
    path: '/inventory',
    component: <Inventory />,
  },
  {
    path: '/products',
    component: <Products />,
  },
]

export const inputFieldsInitialValues = { email: '', password: '' }
export const inputFields = [
  {
    id: 0,
    type: 'email',
    label: 'Enter email address',
  },
  {
    id: 1,
    type: 'password',
    label: 'Enter password',
  },
]

export const inventoryColumns = [
  {
    name: 'Name',
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: 'SKU',
    selector: (row) => row.sku,
    sortable: true,
  },
  {
    name: 'Quantity',
    selector: (row) => row.quantity,
    sortable: true,
  },
  {
    name: 'Color',
    selector: (row) => row.color,
    sortable: true,
  },
  {
    name: 'Size',
    selector: (row) => row.size,
    sortable: true,
  },
  {
    name: 'Price',
    selector: (row) => row.price,
    sortable: true,
  },
  {
    name: 'Cost',
    selector: (row) => row.cost,
    sortable: true,
  },
]

export const productsColumns = [
  {
    name: 'Name',
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: 'Style',
    selector: (row) => row.style,
    sortable: true,
  },
  {
    name: 'Brand',
    selector: (row) => row.brand,
    sortable: true,
  },
]
