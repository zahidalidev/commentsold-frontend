import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

import 'components/appbar/styles.scss'

const MatAppBar = () => (
  <Box>
    <AppBar className='appbar-box' position='static'>
      <Toolbar>
        <Typography variant='p' className='appbar-name'>
          Comment Sold
        </Typography>
        <Button color='inherit'>Inventory</Button>
        <Button color='inherit'>Shop</Button>
        <Button color='inherit'>Orders</Button>
      </Toolbar>
    </AppBar>
  </Box>
)

export default MatAppBar
