import { useEffect } from 'react'
import Paper from '@mui/material/Paper'
import Card from '@mui/joy/Card'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { useRecoilState } from 'recoil'

import AppBar from 'components/appbar'
import Table from 'components/table'
import { productsColumns } from 'utils/constants'
import { userTokenStateAtom } from 'store'

import 'container/products/styles.scss'

const Products = () => {
  const user = useRecoilState(userTokenStateAtom)[0]

  useEffect(() => {
    console.log('prod user: ', user)
  }, [])

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
      <div className='container-fluid product-container'>
        <Paper className='mat-paper' elevation={2}>
          <Typography className='product-heading' variant='h4'>
            User Products
          </Typography>
          <Button className='add-button' variant='contained' size='large'>
            Add Product
          </Button>
          <Card className='mat-card'>
            <Table data={products} columns={productsColumns} touch />
          </Card>
        </Paper>
      </div>
    </>
  )
}

export default Products
