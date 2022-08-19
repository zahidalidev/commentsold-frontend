export const TOKEN = 'token'
export const defaultPageCount = 10

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

export const orderStatusOptions = [
  { value: 'Pending', label: 'Pending' },
  { value: 'Paid', label: 'Paid' },
  { value: 'Fulfulled', label: 'Fulfulled' },
  { value: 'Shipped', label: 'Shipped' },
  { value: 'Open', label: 'Open' },
]

export const shipperNameOptions = [
  { value: 'USPS', label: 'USPS' },
  { value: 'DHL', label: 'DHL' },
  { value: 'FedEx', label: 'FedEx' },
  { value: 'UPS', label: 'UPS' },
]

export const loginFieldsInitialValues = { email: '', password: '' }

export const loginFields = [
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
    type: 'text',
  },
  {
    id: 1,
    label: 'Description',
    name: 'description',
    type: 'text',
  },
  {
    id: 2,
    label: 'Style',
    name: 'style',
    type: 'text',
  },
  {
    id: 3,
    label: 'Brand',
    name: 'brand',
    type: 'text',
  },
  {
    id: 4,
    label: 'Product type',
    name: 'product_type',
    type: 'text',
  },
  {
    id: 5,
    label: 'Shipping price',
    name: 'shipping_price',
    type: 'text',
  },
  {
    id: 6,
    label: 'Note',
    name: 'note',
    type: 'text',
  },
  {
    id: 6,
    label: 'Image url',
    name: 'url',
    type: 'text',
  },
]

export const inventoryColumnsKeys = {
  Name: 'product_name',
  SKU: 'sku',
  Quantity: 'quantity',
  Color: 'color',
  Size: 'size',
  Price: 'price_cents',
  Cost: 'cost_cents',
}

export const inventoryColumns = [
  {
    name: 'Name',
    selector: (row) => row.product?.product_name,
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

export const productColumnsKeys = {
  Name: 'product_name',
  Style: 'style',
  Brand: 'brand',
}

export const orderColumnsKeys = {
  'Customer name': 'name',
  'Email address': 'email',
  'Product name': 'product_name',
  'Order status': 'order_status',
  'Order total': 'total_cents',
  'Transaction id': 'transaction_id',
  Shipper: 'shipper_name',
  'Tracking number': 'tracking_number',
}

export const orderColumns = [
  {
    name: 'Customer name',
    selector: (row) => row.name,
    sortable: true,
    grow: 1.8,
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
    grow: 2,
    wrap: true,
  },
  {
    name: 'Color',
    selector: (row) => row.product.inventories.reduce((acc, item) => `${item.color}${acc && ','} ${acc}`, ''),
    grow: 3,
  },
  {
    name: 'Size',
    selector: (row) => row.product.inventories.reduce((acc, item) => `${item.size}${acc && ','} ${acc}`, ''),
    width: '10rem',
  },
  {
    name: 'Order status',
    selector: (row) => row.order_status,
    sortable: true,
    grow: 1.5,
    wrap: true,
  },
  {
    name: 'Order total',
    selector: (row) => row.total_cents,
    sortable: true,
    grow: 1.5,
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
    grow: 2,
    wrap: true,
  },
]
