import { useEffect, useState } from 'react'
import Paper from '@mui/material/Paper'
import Card from '@mui/joy/Card'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

import AppBar from 'components/appbar'
import Table from 'components/table'
import { productsColumns } from 'utils/constants'

import 'container/products/styles.scss'
import { getToken } from 'utils/helpers'
import { getAllProducts } from 'services/products'

const Products = () => {
  const [products, setProducts] = useState([])
  const navigate = useNavigate()

  const handleProducts = async () => {
    try {
      const token = getToken()
      const { data } = await getAllProducts(token)
      setProducts(data)
    } catch (error) {
      toast.error('Session expired')
      navigate('/login')
    }
  }

  useEffect(() => {
    handleProducts()
  }, [])

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
