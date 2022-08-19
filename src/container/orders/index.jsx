import Card from '@mui/joy/Card'
import CardContent from '@mui/material/CardContent'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

import AppBar from 'components/appbar'
import { formatNumbers } from 'utils/helpers'
import getAllOrders from 'api/order'
import {
  orderColumns, defaultPageCount, orderStatusOptions, shipperNameOptions, orderColumnsKeys,
} from 'utils/constants'
import Select from 'components/select'
import Table from 'components/table'
import { useEffect, useState } from 'react'

import 'container/orders/styles.scss'
import 'container/inventory/styles.scss'

const Orders = () => {
  const navigate = useNavigate()
  const [orders, setOrders] = useState({})
  const [ordersCount, setOrdersCount] = useState({})
  const [pageNumber, setPageNumber] = useState(1)
  const [rowsPerPage, setRowsPerPage] = useState(defaultPageCount)
  const [orderStatus, setOrderStatus] = useState('')
  const [shipper, setShipper] = useState('')
  const [search, setSearch] = useState('')
  const [sortBy, setSortBy] = useState({
    sortColumn: 'Customer name',
    sortOrder: 'asc',
  })

  const handleOrders = async () => {
    try {
      const tempSortBy = { ...sortBy }
      tempSortBy.sortColumn = orderColumnsKeys[tempSortBy.sortColumn]
      const { count, rows } = await getAllOrders(
        rowsPerPage,
        pageNumber,
        search,
        orderStatus,
        shipper,
        tempSortBy,
      )
      setOrders(rows)
      setOrdersCount(count)
    } catch (error) {
      toast.error(error)
      navigate('/login')
    }
  }

  useEffect(() => {
    handleOrders()
  }, [rowsPerPage, pageNumber, search, orderStatus, shipper, sortBy])

  return (
    <>
      <AppBar />
      <div className='container-fluid inventory-container'>
        <Paper className='mat-paper' elevation={2}>
          <Card>
            <div className='order-sale'>
              <Typography className='sale' variant='h5'>
                Total Sale ({formatNumbers(parseInt(orders.totalSale, 10))} cents)
              </Typography>
              <Typography className='avg-sale sale' variant='h5'>
                Average Sale ({formatNumbers(parseInt(orders.average, 10))} cents)
              </Typography>
            </div>
            <CardContent className='mat-card-header'>
              <div className='order-select'>
                <div className='select-wrapper'>
                  <TextField
                    className='text-field'
                    size='small'
                    label='Search'
                    variant='outlined'
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
                <div className='select-wrapper'>
                  <div className='select-drop'>
                    <Select
                      placeHolder='Filter by order status'
                      setValue={setOrderStatus}
                      selectOptions={orderStatusOptions}
                    />
                  </div>
                  <div className='select-drop'>
                    <Select
                      placeHolder='Filter by shipper name'
                      setValue={setShipper}
                      selectOptions={shipperNameOptions}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
            <header className='card-seperator' />
            <Table
              data={orders}
              count={ordersCount}
              columns={orderColumns}
              setPageNumber={setPageNumber}
              setRowsPerPage={setRowsPerPage}
              setSortBy={setSortBy}
            />
          </Card>
        </Paper>
      </div>
    </>
  )
}

export default Orders
