import Card from '@mui/joy/Card'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { toast } from 'react-toastify'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Form from 'components/form'
import { getToken, saveToken } from 'utils/helpers'
import LoadingModal from 'components/loadingModal'
import login from 'services/user'
import { loginFields, loginFieldsInitialValues } from 'utils/constants'
import { validateLogin } from 'utils/validations'

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
            <Form
              fieldsInitialValues={loginFieldsInitialValues}
              handleSubmition={handleLogin}
              action='Login'
              validate={validateLogin}
              fields={loginFields}
            />
          </Card>
        </Paper>
      </div>
    </div>
  )
}

export default Login
