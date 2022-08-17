import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'

import 'components/appbar/styles.scss'

const MatAppBar = () => {
  const navigate = useNavigate()
  return (
    <Box>
      <AppBar className='appbar-box' position='static'>
        <Toolbar>
          <Typography variant='p' className='appbar-name'>
            Comment Sold
          </Typography>
          <Button onClick={() => navigate('/inventory')} color='inherit'>
            Inventory
          </Button>
          <Button onClick={() => navigate('/products')} color='inherit'>
            Products
          </Button>
          <Button onClick={() => navigate('/order')} color='inherit'>
            Orders
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default MatAppBar
