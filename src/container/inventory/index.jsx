import Card from '@mui/joy/Card'
import CardContent from '@mui/material/CardContent'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

import AppBar from 'components/appbar'
import Table from 'components/table'
import { formatNumbers } from 'utils/helpers'
import getInventories from 'api/inventory'
import { inventoryColumns, defaultPageCount, inventoryColumnsKeys } from 'utils/constants'
import SelectThresh from 'components/selectThresh'
import { useEffect, useState } from 'react'

import 'container/inventory/styles.scss'

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
    try {
      const tempSortBy = { ...sortBy }
      tempSortBy.sortColumn = inventoryColumnsKeys[tempSortBy.sortColumn]
      const tempOperator = price ? operator : ''
      const { count, rows } = await getInventories(
        rowsPerPage,
        pageNumber,
        name,
        tempOperator,
        price,
        tempSortBy,
      )
      setInventoriesCount(count)
      setInventories(rows)
    } catch (error) {
      toast.error(error)
      navigate('/login')
    }
  }

  useEffect(() => {
    handleInventories()
  }, [pageNumber, rowsPerPage, price, name, sortBy])

  return (
    <>
      <AppBar />
      <div className='container-fluid inventory-container'>
        <Paper className='mat-paper' elevation={2}>
          <Card>
            <Typography variant='h5'>Total Products ({formatNumbers(parseInt(inventoriesCount, 10))})</Typography>
            <CardContent className='mat-card-header'>
              <TextField
                onChange={(e) => setName(e.target.value)}
                className='text-field'
                size='small'
                label='Search by name'
                variant='outlined'
              />
              <div className='select'>
                <SelectThresh setPrice={setPrice} setOperator={setOperator} />
              </div>
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
      </div>
    </>
  )
}

export default Inventory
