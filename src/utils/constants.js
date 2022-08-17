import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'

import Login from 'container/auth/login'
import Inventory from 'container/inventory'
import Products from 'container/products'
import Product from 'container/product'
import Order from 'container/order'

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
    path: '/product/:action',
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

export const orderColumns = [
  {
    name: 'Customer name',
    selector: (row) => row.customerName,
    sortable: true,
  },
  {
    name: 'Email address',
    selector: (row) => row.emailAddress,
    sortable: true,
  },
  {
    name: 'Product name',
    selector: (row) => row.productName,
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
    name: 'Order status',
    selector: (row) => row.orderStatus,
    sortable: true,
  },
  {
    name: 'Order total',
    selector: (row) => row.orderTotal,
    sortable: true,
  },
  {
    name: 'Transaction id',
    selector: (row) => row.transactionId,
    sortable: true,
  },
  {
    name: 'Shipper',
    selector: (row) => row.shipper,
    sortable: true,
  },
  {
    name: 'Tracking number',
    selector: (row) => row.trackingNumber,
    sortable: true,
  },
]

const handleProductAction = (type, id) => {
  console.log('product action: ', type, id)
}

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
  {
    name: 'Edit',
    selector: (row) => (
      <EditOutlinedIcon
        sx={{ color: '#01225a' }}
        onClick={() => handleProductAction('edit', row.id)}
      />
    ),
    sortable: true,
  },
  {
    name: 'Remove',
    selector: (row) => (
      <DeleteOutlineOutlinedIcon
        sx={{ color: '#FF3333' }}
        onClick={() => handleProductAction('remove', row.id)}
      />
    ),
    sortable: true,
  },
]
