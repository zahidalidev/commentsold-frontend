import Paper from '@mui/material/Paper'
import Card from '@mui/joy/Card'

import AppBar from 'components/appbar'
import Table from 'components/table'
import { productsColumns } from 'utils/constants'

import 'container/products/styles.scss'

const Products = () => {
  const products = [
    {
      id: 0,
      name: 'product1',
      style: 'sku',
      brand: 10,
    },
    {
      id: 1,
      name: 'product1',
      style: 'sku',
      brand: 10,
    },
    {
      id: 2,
      name: 'product1',
      style: 'sku',
      brand: 10,
    },
  ]

  return (
    <>
      <AppBar />
      <div className='container-fluid inventory-container'>
        <Paper className='mat-paper' elevation={2}>
          <Card>
            <Table inventory={products} columns={productsColumns} touch />
          </Card>
        </Paper>
      </div>
    </>
  )
}

export default Products
