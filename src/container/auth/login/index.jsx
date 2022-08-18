import { Fragment, useEffect, useState } from 'react'
import Card from '@mui/joy/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { Formik } from 'formik'
import _ from 'lodash'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import LoadingModal from 'components/loadingModal'
import { login } from 'services/user'
import { inputFields, inputFieldsInitialValues } from 'utils/constants'
import { validateLogin } from 'utils/validations'
import { getToken, saveToken } from 'utils/helpers'

import 'container/auth/login/styles.scss'

const Login = () => {
  const navigate = useNavigate()
  const [loading, setloading] = useState(false)

  const handleLogin = async (values) => {
    setloading(true)
    try {
      const { data } = await login(values)
      saveToken(data.token)
      navigate('/products')
    } catch (error) {
      toast.error(error)
    }
    setloading(false)
  }

  useEffect(() => {
    const token = getToken()
    if (token) {
      navigate('/products')
    }
  }, [])

  return (
    <div className='container-fluid container'>
      <LoadingModal show={loading} />
      <div className='container'>
        <Paper className='mat-paper' elevation={2}>
          <Card className='mat-card'>
            <Typography className='heading' variant='h3'>
              Login
            </Typography>
            <CardContent className='mat-card-content'>
              <Formik
                initialValues={inputFieldsInitialValues}
                validate={validateLogin}
                onSubmit={handleLogin}
              >
                {({
                  values, errors, touched, handleChange, handleBlur, handleSubmit,
                }) => (
                  <form className='mat-form' onSubmit={handleSubmit}>
                    {inputFields.map((field) => (
                      <Fragment key={field.id.toString()}>
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
                      Login
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

export default Login
