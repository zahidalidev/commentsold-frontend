import Login from 'container/auth/login'
import Inventory from 'container/inventory'
import Products from 'container/products'
import Product from 'container/product'
import Orders from 'container/orders'

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
    path: '/orders',
    component: <Orders />,
  },
  {
    path: '/products',
    component: <Products />,
  },
  {
    path: '/product/:action',
    component: <Product />,
  },
  {
    path: '/product/:action/:id',
    component: <Product />,
  },
]

export const menu = [
  {
    name: 'Inventory',
    path: '/inventory',
  },
  {
    name: 'Products',
    path: '/products',
  },
  {
    name: 'Orders',
    path: '/orders',
  },
]

export const thresholdOptions = [
  { value: 'lt', label: '<' },
  { value: 'gt', label: '>' },
  { value: 'eq', label: '=' },
]

export const selectOptions = [
  { value: 'Pending', label: 'Pending' },
  { value: 'Paid', label: 'Paid' },
  { value: 'Fulfulled', label: 'Fulfulled' },
  { value: 'Shipped', label: 'Shipped' },
  { value: 'Open', label: 'Open' },
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

export const productFields = [
  {
    id: 0,
    label: 'Product name',
    name: 'product_name',
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
    name: 'product_type',
  },
  {
    id: 5,
    label: 'Shipping price',
    name: 'shipping_price',
  },
  {
    id: 6,
    label: 'Note',
    name: 'note',
  },
  {
    id: 6,
    label: 'Image url',
    name: 'url',
  },
]

export const inventoryColumns = [
  {
    name: 'Name',
    selector: (row) => row.product?.product_name,
    sortable: true,
    wrap: true,
  },
  {
    name: 'SKU',
    selector: (row) => row.sku,
    sortable: true,
    wrap: true,
  },
  {
    name: 'Quantity',
    selector: (row) => row.quantity,
    sortable: true,
    wrap: true,
  },
  {
    name: 'Color',
    selector: (row) => row.color,
    sortable: true,
    wrap: true,
  },
  {
    name: 'Size',
    selector: (row) => row.size,
    sortable: true,
    wrap: true,
  },
  {
    name: 'Price',
    selector: (row) => row.price_cents,
    sortable: true,
    wrap: true,
  },
  {
    name: 'Cost',
    selector: (row) => row.cost_cents,
    sortable: true,
    wrap: true,
  },
]

export const orderColumns = [
  {
    name: 'Customer name',
    selector: (row) => row.name,
    sortable: true,
    grow: 1.5,
    wrap: true,
  },
  {
    name: 'Email address',
    selector: (row) => row.email,
    sortable: true,
    grow: 2.5,
    wrap: true,
  },
  {
    name: 'Product name',
    selector: (row) => row.product.product_name,
    sortable: true,
    grow: 2,
    wrap: true,
  },
  {
    name: 'Color',
    selector: (row) => row.product.inventories.reduce((acc, item) => `${item.color}, ${acc}`, ''),
    sortable: true,
    grow: 3,
    wrap: true,
  },
  {
    name: 'Size',
    selector: (row) => row.product.inventories.reduce((acc, item) => `${item.size}, ${acc}`, ''),
    sortable: true,
    width: '10rem',
    wrap: true,
  },
  {
    name: 'Order status',
    selector: (row) => row.order_status,
    sortable: true,
    wrap: true,
  },
  {
    name: 'Order total',
    selector: (row) => row.total_cents,
    sortable: true,
    wrap: true,
  },
  {
    name: 'Transaction id',
    selector: (row) => row.transaction_id,
    sortable: true,
    grow: 1.5,
    wrap: true,
  },
  {
    name: 'Shipper',
    selector: (row) => row.shipper_name,
    sortable: true,
    wrap: true,
  },
  {
    name: 'Tracking number',
    selector: (row) => row.tracking_number,
    sortable: true,
    grow: 1.3,
    wrap: true,
  },
]
