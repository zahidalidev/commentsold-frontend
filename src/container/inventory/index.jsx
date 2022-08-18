import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Card from '@mui/joy/Card'
import CardContent from '@mui/material/CardContent'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

import AppBar from 'components/appbar'
import Table from 'components/table'
import { inventoryColumns } from 'utils/constants'
import { useEffect, useState } from 'react'
import { formatNumbers, getToken } from 'utils/helpers'
import getInventories from 'services/inventory'
import SelectThresh from 'components/selectThresh'

import 'container/inventory/styles.scss'

const Inventory = () => {
  const [inventories, setInventories] = useState({})
  const [pageNumber, setPageNumber] = useState(1)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [operator, setOperator] = useState('lt')

  const navigate = useNavigate()

  const handleInventories = async () => {
    try {
      const token = getToken()
      const tempOperator = price ? operator : ''
      const { data } = await getInventories(
        token,
        rowsPerPage,
        pageNumber,
        name,
        tempOperator,
        price,
      )
      setInventories(data)
    } catch (error) {
      toast.error(error)
      navigate('/login')
    }
  }

  useEffect(() => {
    handleInventories()
  }, [pageNumber, rowsPerPage, price, name])

  return (
    <>
      <AppBar />
      <div className='container-fluid inventory-container'>
        <Paper className='mat-paper' elevation={2}>
          <Card>
            <Typography variant='h5'>Total Products ({formatNumbers(parseInt(inventories.count, 10))})</Typography>
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
              columns={inventoryColumns}
              setPageNumber={setPageNumber}
              setRowsPerPage={setRowsPerPage}
            />
          </Card>
        </Paper>
      </div>
    </>
  )
}

export default Inventory
