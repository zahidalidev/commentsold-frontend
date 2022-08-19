import Box from '@mui/material/Box'
import {
  Button, CardContent, TextField, Typography,
} from '@mui/material'
import { Fragment } from 'react'
import { Formik } from 'formik'
import { isEmpty } from 'lodash'

import './styles.scss'
import { Select } from 'components'

const Form = ({
  fieldsInitialValues, handleSubmition, action, validate, fields, selectList,
}) => (
  <CardContent data-testid='content-form' className='mat-card-content'>
    <Formik
      initialValues={fieldsInitialValues}
      enableReinitialize
      validate={validate}
      onSubmit={handleSubmition}
    >
      {({
        values, errors, touched, handleChange, handleBlur, handleSubmit, setFieldValue,
      }) => (
        <form className='mat-form' onSubmit={handleSubmit}>
          {fields.map((field) => (field.type !== 'select' ? (
            <Fragment key={field.name}>
              <TextField
                className='text-field'
                fullWidth
                label={field.label}
                variant='outlined'
                type={field.type}
                name={field.name}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values[field.name]}
              />
              <Typography className='warn-typography'>
                {errors[field.name] && touched[field.name] && errors[field.name]}
              </Typography>
            </Fragment>
          ) : (
            <Fragment key={field.name}>
              <Box className='product-dropdown'>
                <Select
                  setValue={(value) => setFieldValue(field.name, value)}
                  selectOptions={selectList[field.name].options}
                  placeHolder={selectList[field.name].placeholder}
                  value={values[field.name]}
                />
              </Box>
              <Typography className='warn-typography'>
                {errors[field.name] && touched[field.name] && errors[field.name]}
              </Typography>
            </Fragment>
          )))}

          <Button
            className='submit-button'
            type='submit'
            disabled={!isEmpty(errors)}
            variant='contained'
            size='large'
          >
            {action}
          </Button>
        </form>
      )}
    </Formik>
  </CardContent>
)

export default Form
