import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Card from '@mui/joy/Card'
import CardContent from '@mui/material/CardContent'

import AppBar from 'components/appbar'
import Table from 'components/table'
import Select from 'components/select'
import { orderColumns } from 'utils/constants'

import 'container/order/styles.scss'
import 'container/inventory/styles.scss'

const Order = () => {
  const orders = [
    {
      id: 0,
      customerName: 'Fareed',
      emailAddress: 'fareed@gmail.com',
      productName: 'demo',
      color: 'red',
      size: '121',
      orderStatus: 'pending',
      orderTotal: 1222,
      transactionId: '28328y3213oivh2gyg',
      shipper: 'usama',
      trackingNumber: 'askhdgasgy978',
    },
    {
      id: 1,
      customerName: 'Fareed',
      emailAddress: 'fareed@gmail.com',
      productName: 'demo',
      color: 'red',
      size: '121',
      orderStatus: 'pending',
      orderTotal: 1222,
      transactionId: '28328y3213oivh2gyg',
      shipper: 'usama',
      trackingNumber: 'askhdgasgy978',
    },
    {
      id: 2,
      customerName: 'Fareed',
      emailAddress: 'fareed@gmail.com',
      productName: 'demo',
      color: 'red',
      size: '121',
      orderStatus: 'pending',
      orderTotal: 1222,
      transactionId: '28328y3213oivh2gyg',
      shipper: 'usama',
      trackingNumber: 'askhdgasgy978',
    },
    {
      id: 3,
      customerName: 'Fareed',
      emailAddress: 'fareed@gmail.com',
      productName: 'demo',
      color: 'red',
      size: '121',
      orderStatus: 'pending',
      orderTotal: 1222,
      transactionId: '28328y3213oivh2gyg',
      shipper: 'usama',
      trackingNumber: 'askhdgasgy978',
    },
  ]

  return (
    <>
      <AppBar />
      <div className='container-fluid inventory-container'>
        <Paper className='mat-paper' elevation={2}>
          <Card>
            <div className='order-sale'>
              <Typography variant='h5'>Total Sale ({orders.length})</Typography>
              <Typography className='avg-sale' variant='h5'>
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
