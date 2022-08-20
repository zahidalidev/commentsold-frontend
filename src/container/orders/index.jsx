import {
  Box, CardContent, Paper, Typography, TextField,
} from '@mui/material'
import Card from '@mui/joy/Card'
import { useNavigate } from 'react-router-dom'

import { defaultPageCount } from 'utils/constants/common'
import { formatNumbers, getToken } from 'utils/helpers'
import fetchAllOrders from 'api/order'
import {
  orderColumns, orderColumnsKeys, orderStatusOptions, shipperNameOptions,
} from 'utils/constants/order'
import { AppBar, Select, Table } from 'components'
import { useEffect, useState } from 'react'

import './styles.scss'
import 'container/inventory/styles.scss'

const Orders = () => {
  const navigate = useNavigate()
  const [orders, setOrders] = useState({})
  const [ordersCount, setOrdersCount] = useState({})
  const [pageNumber, setPageNumber] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(defaultPageCount)
  const [orderStatus, setOrderStatus] = useState('')
  const [shipper, setShipper] = useState('')
  const [search, setSearch] = useState('')
  const [sales, setSales] = useState({ totalSale: 0, average: 0 })
  const [loading, setLoading] = useState(false)
  const [sortBy, setSortBy] = useState({
    sortColumn: 'Customer name',
    sortOrder: 'asc',
  })

  const handleOrders = async () => {
    setLoading(true)
    const tempSortBy = { ...sortBy }
    tempSortBy.name = orderColumnsKeys[tempSortBy.sortColumn]
    const status = orderStatus === 'All' ? '' : orderStatus
    const shippName = shipper === 'All' ? '' : shipper
    const {
      count, rows, totalSale, average,
    } = await fetchAllOrders({
      rowsPerPage,
      pageNumber,
      search,
      status,
      shippName,
      tempSortBy,
    })
    if (count !== undefined) {
      setOrders(rows)
      setOrdersCount(count)
      setSales({
        totalSale,
        average,
      })
    } else {
      const token = getToken()
      if (!token) {
        navigate('/login')
      }
    }
    setLoading(false)
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
                Orders - Total Sale ({formatNumbers(parseInt(sales.totalSale, 10))} cents)
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
                      value={orderStatus}
                      selectOptions={orderStatusOptions}
                    />
                  </Box>
                  <Box className='select-drop'>
                    <Select
                      placeHolder='Filter by shipper name'
                      setValue={setShipper}
                      selectOptions={shipperNameOptions}
                      value={shipper}
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
              loading={loading}
            />
          </Card>
        </Paper>
      </Box>
    </>
  )
}

export default Orders
