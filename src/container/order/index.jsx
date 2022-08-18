import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Card from '@mui/joy/Card'
import CardContent from '@mui/material/CardContent'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

import AppBar from 'components/appbar'
import Table from 'components/table'
import Select from 'components/select'
import { orderColumns } from 'utils/constants'
import { getToken } from 'utils/helpers'
import { useEffect, useState } from 'react'
import { getAllOrders } from 'services/order'

import 'container/order/styles.scss'
import 'container/inventory/styles.scss'

const Order = () => {
  const navigate = useNavigate()
  const [orders, setOrders] = useState([])

  const handleOrders = async () => {
    try {
      const token = getToken()
      const { data } = await getAllOrders(token)
      setOrders(data)
    } catch (error) {
      toast.error('Session expired')
      navigate('/login')
    }
  }

  useEffect(() => {
    handleOrders()
  }, [])

  return (
    <>
      <AppBar />
      <div className='container-fluid inventory-container'>
        <Paper className='mat-paper' elevation={2}>
          <Card>
            <div className='order-sale'>
              <Typography className='sale' variant='h5'>Total Sale ({orders.length})</Typography>
              <Typography className='avg-sale sale' variant='h5'>
                Average Sale ({orders.length})
              </Typography>
            </div>
            <CardContent className='mat-card-header'>
              <TextField className='text-field' size='small' label='Search' variant='outlined' />
              <div className='select'>
                <Select />
              </div>
            </CardContent>
            <header className='card-seperator' />
            <Table data={orders} columns={orderColumns} />
          </Card>
        </Paper>
      </div>
    </>
  )
}

export default Order
