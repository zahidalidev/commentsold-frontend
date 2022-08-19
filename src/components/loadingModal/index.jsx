import { Box, CircularProgress, Modal } from '@mui/material'

import './styles.scss'

const LoadingModal = ({ show }) => (
  <Modal open={show}>
    <Box className='modal-box'>
      <CircularProgress />
    </Box>
  </Modal>
)

export default LoadingModal
