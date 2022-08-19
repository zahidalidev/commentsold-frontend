import { Box, Paper, Typography } from '@mui/material'
import Card from '@mui/joy/Card'
import { toast } from 'react-toastify'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import _ from 'lodash'

import {
  addProducts, getProduct, updateProducts, getProductStyles, getProductBrands, getProductTypes,
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
    const styles = await getProductStyles()
    const brands = await getProductTypes()
    const types = await getProductBrands()

    const productStyleOptions = styles.map(item => ({ value: item, label: item }))
    const productBrandOptions = brands.map(item => ({ value: item, label: item }))
    const productTypeOptions = types.map(item => ({ value: item, label: item }))

    tempOptions.style.options = productStyleOptions
    tempOptions.brand.options = productBrandOptions
    tempOptions.product_type.options = productTypeOptions
    setProductSelectOptions(tempOptions)
  }

  const getProductById = async (id) => {
    try {
      const data = await getProduct(id)
      if (!_.isEmpty(data)) {
        setInitialValues(data)
      }
    } catch (error) {
      toast.error(error)
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
