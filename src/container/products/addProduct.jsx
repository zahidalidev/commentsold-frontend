import { Box, Paper, Typography } from '@mui/material'
import Card from '@mui/joy/Card'
import { toast } from 'react-toastify'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { isEmpty } from 'lodash'

import {
  addProducts, fetchProduct, updateProducts, fetchProductStyles, fetchProductBrands,
  fetchProductTypes,
} from 'api/products'
import { productFields } from 'utils/constants/product'
import { AppBar, LoadingModal, Form } from 'components'
import { validateProduct } from 'utils/validations'

import 'container/auth/login/styles.scss'
import './styles.scss'

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
  const [productSelectOptions, setProductSelectOptions] = useState({
    style: { options: [], placeholder: 'Select style' },
    brand: { options: [], placeholder: 'Select brand' },
    product_type: { options: [], placeholder: 'Select product type' },
  })

  const handleProductOptions = async () => {
    const tempOptions = { ...productSelectOptions }
    const styles = await fetchProductStyles()
    const brands = await fetchProductTypes()
    const types = await fetchProductBrands()

    const productStyleOptions = styles.map(item => ({ value: item, label: item }))
    const productBrandOptions = brands.map(item => ({ value: item, label: item }))
    const productTypeOptions = types.map(item => ({ value: item, label: item }))

    tempOptions.style.options = productStyleOptions
    tempOptions.brand.options = productBrandOptions
    tempOptions.product_type.options = productTypeOptions
    setProductSelectOptions(tempOptions)
  }

  const getProductById = async (id) => {
    const data = await fetchProduct(id)
    if (!isEmpty(data)) {
      setInitialValues(data)
    }
  }

  useEffect(() => {
    const params = window.location.pathname.split('/')
    setAction(params[2])
    handleProductOptions()
    if (params[2] === 'update') {
      getProductById(params[3])
      setcurrentProductId(params[3])
    }
  }, [window.location.pathname])

  const handleProduct = async (values) => {
    setloading(true)
    if (action === 'add') {
      const data = await addProducts(values)
      if (!isEmpty(data)) {
        toast.success(`Product ${action === 'add' ? 'added' : 'updated'}`)
        navigate('/products')
      } else {
        toast.error('Error! product not added')
      }
    } else {
      const data = await updateProducts(values, currentProductId)
      if (!isEmpty(data)) {
        toast.success(`Product ${action === 'add' ? 'added' : 'updated'}`)
        navigate('/products')
      } else {
        toast.error('Error! product not updated')
      }
    }
    setloading(false)
  }

  return (
    <>
      <AppBar />
      <Box className='add-product-container container-fluid container'>
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
                selectList={productSelectOptions}
              />
            </Card>
          </Paper>
        </Box>
      </Box>
    </>
  )
}

export default Product
