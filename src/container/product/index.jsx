import { Fragment, useEffect, useState } from 'react'
import Card from '@mui/joy/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { Formik } from 'formik'
import _ from 'lodash'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

import { addProducts, getProduct, updateProducts } from 'services/products'
import LoadingModal from 'components/loadingModal'
import AppBar from 'components/appbar'
import { getToken } from 'utils/helpers'
import { productFields } from 'utils/constants'
import { validateProduct } from 'utils/validations'

import 'container/product/styles.scss'
import 'container/auth/login/styles.scss'

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
      const token = getToken()
      const { data } = await getProduct(id, token)
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
      const token = getToken()
      if (action === 'add') {
        await addProducts(values, token)
      } else {
        await updateProducts(values, currentProductId, token)
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
      <div className='container-fluid container'>
        <LoadingModal show={loading} />
        <div className='container'>
          <Paper className='mat-paper' elevation={2}>
            <Card className='mat-card'>
              <Typography className='heading' variant='h4'>
                {action} Product
              </Typography>
              <CardContent className='mat-card-content'>
                <Formik
                  initialValues={productFieldsInitialValues}
                  enableReinitialize
                  validate={validateProduct}
                  onSubmit={handleProduct}
                >
                  {({
                    values, errors, touched, handleChange, handleBlur, handleSubmit,
                  }) => (
                    <form className='mat-form' onSubmit={handleSubmit}>
                      {productFields.map((field) => (
                        <Fragment key={field.name}>
                          <TextField
                            className='text-field'
                            fullWidth
                            label={field.label}
                            variant='outlined'
                            type='text'
                            name={field.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values[field.name]}
                          />
                          <Typography className='warn-typography'>
                            {errors[field.name] && touched[field.name] && errors[field.name]}
                          </Typography>
                        </Fragment>
                      ))}
                      <Button
                        className='submit-button'
                        type='submit'
                        disabled={!_.isEmpty(errors)}
                        variant='contained'
                        size='large'
                      >
                        {action}
                      </Button>
                    </form>
                  )}
                </Formik>
              </CardContent>
            </Card>
          </Paper>
        </div>
      </div>
    </>
  )
}

export default Product
