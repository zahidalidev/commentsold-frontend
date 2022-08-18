import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'
import Typography from '@mui/material/Typography'

import 'components/confirmationAlert/styles.scss'

const ConfirmModal = ({ show, deleteProduct, setConfirmModal }) => (
  <Modal open={show}>
    <Box className='modal-confirm-box'>
      <Typography variant='h6'>Delete Product</Typography>
      <Button
        onClick={deleteProduct}
        className='submit-button'
        type='submit'
        variant='outlined'
        size='large'
      >
        Yes
      </Button>
      <Button
        onClick={() => setConfirmModal(false)}
        className='submit-button'
        type='submit'
        variant='outlined'
        size='large'
      >
        No
      </Button>
    </Box>
  </Modal>
)

export default ConfirmModal
