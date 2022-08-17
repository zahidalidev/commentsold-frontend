import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Card from '@mui/joy/Card'
import CardContent from '@mui/material/CardContent'

import AppBar from 'components/appbar'
import Table from 'components/table'
import Select from 'components/select'
import { inventoryColumns } from 'utils/constants'

import 'container/inventory/styles.scss'

const Inventory = () => {
  const inventory = [
    {
      id: 0,
      name: 'product1',
      sku: 'sku',
      quantity: 10,
      color: 'red',
      size: '121',
      price: 123,
      cost: 120,
    },
    {
      id: 2,
      name: 'product1',
      sku: 'sku',
      quantity: 10,
      color: 'red',
      size: '121',
      price: 123,
      cost: 120,
    },
    {
      id: 3,
      name: 'product1',
      sku: 'sku',
      quantity: 10,
      color: 'red',
      size: '121',
      price: 123,
      cost: 120,
    },
  ]

  return (
    <>
      <AppBar />
      <div className='container-fluid inventory-container'>
        <Paper className='mat-paper' elevation={2}>
          <Card>
            <Typography variant='h5'>Total Products ({inventory.length})</Typography>
            <CardContent className='mat-card-header'>
              <TextField className='text-field' size='small' label='Search' variant='outlined' />
              <div className='select'>
                <Select />
              </div>
            </CardContent>
            <header className='card-seperator' />
            <Table inventory={inventory} columns={inventoryColumns} />
          </Card>
        </Paper>
      </div>
    </>
  )
}

export default Inventory
