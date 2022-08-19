import {
  Box, Card, Paper, Typography,
} from '@mui/material'
import { toast } from 'react-toastify'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { getToken } from 'utils/helpers'
import { Form, LoadingModal } from 'components'
import login from 'api/user'
import { loginFields, loginFieldsInitialValues } from 'utils/constants/login'
import { validateLogin } from 'utils/validations'

import './styles.scss'

const Login = () => {
  const navigate = useNavigate()
  const [loading, setloading] = useState(false)

  const handleLogin = async (values) => {
    setloading(true)
    const { token } = await login(values)
    if (token) {
      navigate('/products')
    } else {
      toast.error('Login error')
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
    <Box className='container-fluid container login-container'>
      <LoadingModal show={loading} />
      <Box>
        <Paper className='mat-paper login-paper'>
          <Card className='mat-card'>
            <Typography className='heading' variant='h3'>
              Login
            </Typography>
            <Form
              fieldsInitialValues={loginFieldsInitialValues}
              handleSubmition={handleLogin}
              action='Login'
              validate={validateLogin}
              fields={loginFields}
            />
          </Card>
        </Paper>
      </Box>
    </Box>
  )
}

export default Login
