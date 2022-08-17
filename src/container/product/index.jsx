import { Fragment, useEffect, useState } from 'react'
import Card from '@mui/joy/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { Formik } from 'formik'
import _ from 'lodash'

import { productFields, productFieldsInitialValues } from 'utils/constants'
import { validateProduct } from 'utils/validations'

import 'container/product/styles.scss'
import 'container/auth/login/styles.scss'

const Product = () => {
  const [action, setAction] = useState()
  const [uploadedImage, setUploadedImage] = useState(null)

  useEffect(() => {
    setAction(window.location.pathname.split('/')[2])
  }, [window.location.pathname])

  const handleProduct = () => {
    const image = uploadedImage
    if (!image) {
      console.log('upload image!!')
    }
  }

  return (
    <div className='container-fluid container'>
      <div className='container'>
        <Paper className='mat-paper' elevation={2}>
          <Card className='mat-card'>
            <Typography className='heading' variant='h4'>
              {action} Product
            </Typography>
            <CardContent className='mat-card-content'>
              <Formik
                initialValues={productFieldsInitialValues}
                validate={validateProduct}
                onSubmit={handleProduct}
              >
                {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                  <form className='mat-form' onSubmit={handleSubmit}>
                    {productFields.map((field) => (
                      <Fragment key={field.id.toString()}>
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
                      className='upload-btn'
                      variant='outlined'
                      fullWidth
                      size='large'
                      component='label'
                    >
                      Upload Image
                      <input
                        onChange={(e) => setUploadedImage(e.target.files.item(0))}
                        hidden
                        type='file'
                      />
                    </Button>

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
  )
}

export default Product
