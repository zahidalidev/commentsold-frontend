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
    id: 5,
    label: 'Shipping price',
    name: 'shipping_price',
    type: 'number',
  },
  {
    id: 6,
    label: 'Note (optional)',
    name: 'note',
    type: 'text',
  },
  {
    id: 6,
    label: 'Image url (optional)',
    name: 'url',
    type: 'text',
  },
  {
    id: 4,
    label: 'Product type',
    name: 'product_type',
    type: 'select',
  },
  {
    id: 2,
    label: 'Style',
    name: 'style',
    type: 'select',
  },
  {
    id: 3,
    label: 'Brand',
    name: 'brand',
    type: 'select',
  },
]

export const productColumnsKeys = {
  Name: { columnName: 'product_name', tableName: 'products' },
  Style: { columnName: 'style', tableName: 'products' },
  Brand: { columnName: 'brand', tableName: 'products' },
}
