import Box from '@mui/material/Box'
import Card from '@mui/joy/Card'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { toast } from 'react-toastify'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import AppBar from 'components/appbar'
import { addProducts, getProduct, updateProducts } from 'api/products'
import Form from 'container/form'
import LoadingModal from 'components/loadingModal'
import { productFields } from 'utils/constants'
import { validateProduct } from 'utils/validations'

import 'container/auth/login/styles.scss'
import 'container/product/styles.scss'

const Product = () => {
  const [action, setAction] = useState()
  const [loading, setloading] = useState(false)
  const [currentProductId, setcurrentProductId] = useState('')
  const navigate = useNavigate()
  const [productFieldsInitialValues, setInitialValues] = useState({
    product_name: '',
    description: '',
    style: '',
    brand: '',
    product_type: '',
    shipping_price: '',
    note: '',
    url: '',
  })

  const getProductById = async (id) => {
    try {
      const { data } = await getProduct(id)
      setInitialValues(data)
    } catch (error) {
      toast.error(error)
    }
  }

  useEffect(() => {
    const params = window.location.pathname.split('/')
    setAction(params[2])
    if (params[2] === 'update') {
      getProductById(params[3])
      setcurrentProductId(params[3])
    }
  }, [window.location.pathname])

  const handleProduct = async (values) => {
    setloading(true)
    try {
      if (action === 'add') {
        await addProducts(values)
      } else {
        await updateProducts(values, currentProductId)
      }
      toast.success(`Product ${action === 'add' ? 'added' : 'updated'}`)
      navigate('/products')
    } catch (error) {
      toast.error(error)
    }
    setloading(false)
  }

  return (
    <>
      <AppBar />
      <Box className='container-fluid container'>
        <LoadingModal show={loading} />
        <Box className='container'>
          <Paper className='mat-paper' elevation={2}>
            <Card className='mat-card'>
              <Typography className='heading' variant='h4'>
                {action} Product
              </Typography>
              <Form
                fieldsInitialValues={productFieldsInitialValues}
                handleSubmition={handleProduct}
                action={action}
                validate={validateProduct}
                fields={productFields}
              />
            </Card>
          </Paper>
        </Box>
      </Box>
    </>
  )
}

export default Product
