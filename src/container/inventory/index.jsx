import {
  Box, CardContent, Paper, Typography, TextField,
} from '@mui/material'
import Card from '@mui/joy/Card'
import { useNavigate } from 'react-router-dom'

import { AppBar, Table, SelectFilter } from 'components'
import { formatNumbers, getToken } from 'utils/helpers'
import fetchInventories from 'api/inventory'
import { inventoryColumns, inventoryColumnsKeys } from 'utils/constants/inventory'
import { defaultPageCount } from 'utils/constants/common'
import { useEffect, useState } from 'react'

import './styles.scss'

const Inventory = () => {
  const [inventories, setInventories] = useState({})
  const [inventoriesCount, setInventoriesCount] = useState(0)
  const [pageNumber, setPageNumber] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(defaultPageCount)
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [operator, setOperator] = useState('lt')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const [sortBy, setSortBy] = useState({
    sortColumn: 'Name',
    sortOrder: 'asc',
  })

  const handleInventories = async () => {
    setLoading(true)
    const tempSortBy = { ...sortBy }
    tempSortBy.name = inventoryColumnsKeys[tempSortBy.sortColumn]
    const tempOperator = price ? operator : ''
    const { count, rows } = await fetchInventories({
      rowsPerPage,
      pageNumber,
      name,
      tempOperator,
      price,
      tempSortBy,
    })

    if (count !== undefined) {
      setInventoriesCount(count)
      setInventories(rows)
    } else {
      const token = getToken()
      if (!token) {
        navigate('/login')
      }
    }
    setLoading(false)
  }

  useEffect(() => {
    handleInventories()
  }, [pageNumber, rowsPerPage, price, name, sortBy, operator])

  return (
    <>
      <AppBar />
      <Box className='container-fluid inventory-container'>
        <Paper className='mat-paper' elevation={2}>
          <Card>
            <Typography variant='h5'>
              Inventory - Total Inventory Items ({formatNumbers(parseInt(inventoriesCount, 10))})
            </Typography>
            <CardContent className='mat-card-header'>
              <TextField
                onChange={(e) => setName(e.target.value)}
                className='text-field'
                size='small'
                label='Search by name'
                variant='outlined'
              />
              <Box className='select'>
                <SelectFilter setPrice={setPrice} setOperator={setOperator} />
              </Box>
            </CardContent>
            <header className='card-seperator' />
            <Table
              data={inventories}
              count={inventoriesCount}
              columns={inventoryColumns}
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

export default Inventory
