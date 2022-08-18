import Login from 'container/auth/login'
import Inventory from 'container/inventory'
import Products from 'container/products'
import Product from 'container/product'
import Order from 'container/order'

export const TOKEN = 'token'
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
    path: '/order',
    component: <Order />,
  },
  {
    path: '/products',
    component: <Products />,
  },
  {
    path: '/product/:action/:id',
    component: <Product />,
  },
]

export const inputFieldsInitialValues = { email: '', password: '' }
export const inputFields = [
  {
    id: 0,
    type: 'email',
    name: 'email',
    label: 'Enter email address',
  },
  {
    id: 1,
    type: 'password',
    name: 'password',
    label: 'Enter password',
  },
]

export const productFieldsInitialValues = {
  productName: '',
  description: '',
  style: '',
  brand: '',
  productType: '',
  shippingPrice: '',
  note: '',
}

export const productFields = [
  {
    id: 0,
    label: 'Product name',
    name: 'productName',
  },
  {
    id: 1,
    label: 'Description',
    name: 'description',
  },
  {
    id: 2,
    label: 'Style',
    name: 'style',
  },
  {
    id: 3,
    label: 'Brand',
    name: 'brand',
  },
  {
    id: 4,
    label: 'Product type',
    name: 'productType',
  },
  {
    id: 5,
    label: 'Shipping price',
    name: 'shippingPrice',
  },
  {
    id: 6,
    label: 'Note',
    name: 'note',
  },
]

export const inventoryColumns = [
  {
    name: 'Name',
    selector: (row) => row.product.product_name,
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
    selector: (row) => row.price_cents,
    sortable: true,
  },
  {
    name: 'Cost',
    selector: (row) => row.cost_cents,
    sortable: true,
  },
]

export const orderColumns = [
  {
    name: 'Customer name',
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: 'Email address',
    selector: (row) => row.email,
    sortable: true,
  },
  {
    name: 'Product name',
    selector: (row) => row.product.product_name,
    sortable: true,
  },
  {
    name: 'Color',
    selector: (row) => row.product.inventories.reduce((acc, item) => `${item.color}, ${acc}`, ''),
    sortable: true,
    grow: 2,
  },
  {
    name: 'Size',
    selector: (row) => row.product.inventories.reduce((acc, item) => `${item.size}, ${acc}`, ''),
    sortable: true,
    width: '10rem',
  },
  {
    name: 'Order status',
    selector: (row) => row.order_status,
    sortable: true,
  },
  {
    name: 'Order total',
    selector: (row) => row.total_cents,
    sortable: true,
  },
  {
    name: 'Transaction id',
    selector: (row) => row.transaction_id,
    sortable: true,
  },
  {
    name: 'Shipper',
    selector: (row) => row.shipper_name,
    sortable: true,
  },
  {
    name: 'Tracking number',
    selector: (row) => row.tracking_number,
    sortable: true,
  },
]
