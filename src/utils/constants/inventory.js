export const thresholdOptions = [
  { value: 'lt', label: '<' },
  { value: 'gt', label: '>' },
  { value: 'eq', label: '=' },
]

export const inventoryColumnsKeys = {
  Name: { columnName: 'product_name', tableName: 'products' },
  SKU: { columnName: 'sku', tableName: 'products' },
  Quantity: { columnName: 'quantity', tableName: 'products' },
  Color: { columnName: 'color', tableName: 'products' },
  Size: { columnName: 'size', tableName: 'products' },
  Price: { columnName: 'price_cents', tableName: 'products' },
  Cost: { columnName: 'cost_cents', tableName: 'products' },
}

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
