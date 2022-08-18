import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Toolbar from '@mui/material/Toolbar'
import { useNavigate } from 'react-router-dom'

import { menu } from 'utils/constants'
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
