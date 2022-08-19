import Box from '@mui/material/Box'
import Card from '@mui/joy/Card'
import CardContent from '@mui/material/CardContent'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import { useNavigate } from 'react-router-dom'

import { AppBar, Table, SelectFilter } from 'components'
import { formatNumbers, getToken } from 'utils/helpers'
import getInventories from 'api/inventory'
import { inventoryColumns, inventoryColumnsKeys } from 'utils/constants/inventory'
import { defaultPageCount } from 'utils/constants/common'
import { useEffect, useState } from 'react'

import './styles.scss'

const Inventory = () => {
  const [inventories, setInventories] = useState({})
  const [inventoriesCount, setInventoriesCount] = useState(0)
  const [pageNumber, setPageNumber] = useState(1)
  const [rowsPerPage, setRowsPerPage] = useState(defaultPageCount)
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [operator, setOperator] = useState('lt')
  const navigate = useNavigate()
  const [sortBy, setSortBy] = useState({
    sortColumn: 'Name',
    sortOrder: 'asc',
  })

  const handleInventories = async () => {
    const tempSortBy = { ...sortBy }
    tempSortBy.name = inventoryColumnsKeys[tempSortBy.sortColumn]
    const tempOperator = price ? operator : ''
    debugger
    const { count, rows } = await getInventories(
      rowsPerPage,
      pageNumber,
      name,
      tempOperator,
      price,
      tempSortBy,
    )
    debugger

    if (count !== undefined) {
      setInventoriesCount(count)
      setInventories(rows)
    } else {
      const token = getToken()
      if (!token) {
        navigate('/login')
      }
    }
  }

  useEffect(() => {
    handleInventories()
  }, [pageNumber, rowsPerPage, price, name, sortBy])

  return (
    <>
      <AppBar />
      <Box className='container-fluid inventory-container'>
        <Paper className='mat-paper' elevation={2}>
          <Card>
            <Typography variant='h5'>
              Total Products ({formatNumbers(parseInt(inventoriesCount, 10))})
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
            />
          </Card>
        </Paper>
      </Box>
    </>
  )
}

export default Inventory
