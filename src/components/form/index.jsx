import { Fragment } from 'react'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { Formik } from 'formik'
import _ from 'lodash'

import 'components/form/styles.scss'

const Form = ({
  fieldsInitialValues, handleSubmition, action, validate, fields,
}) => (
  <CardContent className='mat-card-content'>
    <Formik
      initialValues={fieldsInitialValues}
      enableReinitialize
      validate={validate}
      onSubmit={handleSubmition}
    >
      {({
        values, errors, touched, handleChange, handleBlur, handleSubmit,
      }) => (
        <form className='mat-form' onSubmit={handleSubmit}>
          {fields.map((field) => (
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
)

export default Form
