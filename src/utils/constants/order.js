export const orderColumnsKeys = {
  'Customer name': { columnName: 'name', tableName: 'products' },
  'Email address': { columnName: 'email', tableName: 'products' },
  'Product name': { columnName: 'product_name', tableName: 'products' },
  'Order status': { columnName: 'order_status', tableName: 'products' },
  'Order total': { columnName: 'total_cents', tableName: 'products' },
  'Transaction id': { columnName: 'transaction_id', tableName: 'products' },
  Shipper: { columnName: 'shipper_name', tableName: 'products' },
  'Tracking number': { columnName: 'tracking_number', tableName: 'products' },
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
