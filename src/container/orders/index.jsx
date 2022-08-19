import Box from '@mui/material/Box'
import Card from '@mui/joy/Card'
import CardContent from '@mui/material/CardContent'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

import AppBar from 'components/appbar'
import { defaultPageCount } from 'utils/constants/common'
import { formatNumbers } from 'utils/helpers'
import getAllOrders from 'api/order'
import {
  orderColumns, orderColumnsKeys, orderStatusOptions, shipperNameOptions,
} from 'utils/constants/order'
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
  const [sales, setSales] = useState({})
  const [sortBy, setSortBy] = useState({
    sortColumn: 'Customer name',
    sortOrder: 'asc',
  })

  const handleOrders = async () => {
    try {
      const tempSortBy = { ...sortBy }
      tempSortBy.name = orderColumnsKeys[tempSortBy.sortColumn]
      const {
        count, rows, totalSale, average,
      } = await getAllOrders(
        rowsPerPage,
        pageNumber,
        search,
        orderStatus,
        shipper,
        tempSortBy,
      )
      setOrders(rows)
      setOrdersCount(count)
      setSales({
        totalSale,
        average,
      })
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
      <Box className='container-fluid inventory-container'>
        <Paper className='mat-paper' elevation={2}>
          <Card>
            <Box className='order-sale'>
              <Typography className='sale' variant='h5'>
                Total Sale ({formatNumbers(parseInt(sales.totalSale, 10))} cents)
              </Typography>
              <Typography className='avg-sale sale' variant='h5'>
                Average Sale ({formatNumbers(parseInt(sales.average, 10))} cents)
              </Typography>
            </Box>
            <CardContent className='mat-card-header'>
              <Box className='order-select'>
                <Box className='select-wrapper'>
                  <TextField
                    className='text-field-order'
                    size='small'
                    label='Search'
                    variant='outlined'
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </Box>
                <Box className='select-wrapper'>
                  <Box className='select-drop'>
                    <Select
                      placeHolder='Filter by order status'
                      setValue={setOrderStatus}
                      selectOptions={orderStatusOptions}
                    />
                  </Box>
                  <Box className='select-drop'>
                    <Select
                      placeHolder='Filter by shipper name'
                      setValue={setShipper}
                      selectOptions={shipperNameOptions}
                    />
                  </Box>
                </Box>
              </Box>
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
      </Box>
    </>
  )
}

export default Orders
