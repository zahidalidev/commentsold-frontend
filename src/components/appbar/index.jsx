import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'
import { removeToken } from 'utils/helpers'

import 'components/appbar/styles.scss'

const MatAppBar = () => {
  const navigate = useNavigate()
  const handleLogout = () => {
    removeToken()
    navigate('/login')
  }

  return (
    <Box>
      <AppBar className='appbar-box' position='static'>
        <Toolbar>
          <Button className='app-menu' onClick={() => navigate('/inventory')} color='inherit'>
            Inventory
          </Button>
          <Button className='app-menu' onClick={() => navigate('/products')} color='inherit'>
            Products
          </Button>
          <Button className='app-menu' onClick={() => navigate('/order')} color='inherit'>
            Orders
          </Button>
          <Button className='app-menu' onClick={() => handleLogout()} color='inherit'>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default MatAppBar
