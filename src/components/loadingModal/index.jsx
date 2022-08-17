import Modal from '@mui/material/Modal'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'

import 'components/loadingModal/styles.scss'

const LoadingModal = ({ show }) => (
  <Modal open={show} aria-labelledby='modal-modal-title' aria-describedby='modal-modal-description'>
    <Box className='modal-box'>
      <CircularProgress />
    </Box>
  </Modal>
)

export default LoadingModal
