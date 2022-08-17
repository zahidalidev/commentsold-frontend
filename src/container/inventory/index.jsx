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
import { inventoryColumns } from 'utils/constants'

import 'container/inventory/styles.scss'
import { useEffect, useState } from 'react'
import { getToken } from 'utils/helpers'
import { getInventories } from 'services/inventory'

const Inventory = () => {
  const [inventories, setInventories] = useState([])

  const navigate = useNavigate()

  const handleInventories = async () => {
    try {
      const token = getToken()
      const { data } = await getInventories(token)
      setInventories(data)
    } catch (error) {
      toast.error('Session expired')
      navigate('/login')
    }
  }

  useEffect(() => {
    handleInventories()
  }, [])

  return (
    <>
      <AppBar />
      <div className='container-fluid inventory-container'>
        <Paper className='mat-paper' elevation={2}>
          <Card>
            <Typography variant='h5'>Total Products ({inventories.length})</Typography>
            <CardContent className='mat-card-header'>
              <TextField className='text-field' size='small' label='Search' variant='outlined' />
              <div className='select'>
                <Select />
              </div>
            </CardContent>
            <header className='card-seperator' />
            <Table data={inventories} columns={inventoryColumns} />
          </Card>
        </Paper>
      </div>
    </>
  )
}

export default Inventory
