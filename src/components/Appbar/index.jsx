import {
  AppBar, Box, Button, Toolbar,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'

import { menu } from 'utils/constants/common'
import { removeToken } from 'utils/helpers'

import './styles.scss'

const MatAppBar = () => {
  const navigate = useNavigate()
  const handleLogout = () => {
    removeToken()
    navigate('/login')
  }

  return (
    <Box data-testid='appbar'>
      <AppBar className='appbar-box' position='static'>
        <Toolbar>
          {menu.map((item) => (
            <Button key={item.name} className='app-menu' onClick={() => navigate(item.path)} color='inherit'>
              {item.name}
            </Button>
          ))}
          <Button className='app-menu' onClick={() => handleLogout()} color='inherit'>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default MatAppBar
