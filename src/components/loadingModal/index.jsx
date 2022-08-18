import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import Modal from '@mui/material/Modal'

import 'components/loadingModal/styles.scss'

const LoadingModal = ({ show }) => (
  <Modal open={show}>
    <Box className='modal-box'>
      <CircularProgress />
    </Box>
  </Modal>
)

export default LoadingModal
