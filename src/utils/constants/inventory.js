import { formatNumbers } from 'utils/helpers'

export const thresholdOptions = [
  { value: 'lt', label: '<' },
  { value: 'gt', label: '>' },
  { value: 'eq', label: '=' },
]

export const inventoryColumnsKeys = {
  Name: { columnName: 'product_name', tableName: 'products' },
  SKU: { columnName: 'sku', tableName: 'inventories' },
  Quantity: { columnName: 'quantity', tableName: 'inventories' },
  Color: { columnName: 'color', tableName: 'inventories' },
  Size: { columnName: 'size', tableName: 'inventories' },
  Price: { columnName: 'price_cents', tableName: 'inventories' },
  Cost: { columnName: 'cost_cents', tableName: 'inventories' },
}

export const inventoryColumns = [
  {
    name: 'Name',
    selector: (row) => row.product?.product_name,
    wrap: true,
    sortable: true,
  },
  {
    name: 'SKU',
    selector: (row) => row.sku,
    sortable: true,
    wrap: true,
  },
  {
    name: 'Quantity',
    selector: (row) => formatNumbers(row.quantity),
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
    selector: (row) => formatNumbers(row.price_cents),
    sortable: true,
    wrap: true,
  },
  {
    name: 'Cost',
    selector: (row) => formatNumbers(row.cost_cents),
    sortable: true,
    wrap: true,
  },
]
