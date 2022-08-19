import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'
import Typography from '@mui/material/Typography'

import 'components/deleteModal/styles.scss'

const DeleteModal = ({ show, deleteProduct, setConfirmModal }) => (
  <Modal open={show}>
    <Box className='modal-confirm-box'>
      <Box className='header'>
        <Typography variant='h5'>Confirm Delete Product</Typography>
        <Typography className='description'>
          Are you sure you want to delete the product?
        </Typography>
      </Box>
      <Box className='button-container'>
        <Button
          onClick={deleteProduct}
          className='submit-button'
          type='submit'
          variant='text'
          size='large'
        >
          Yes
        </Button>
        <Button
          onClick={() => setConfirmModal(false)}
          className='submit-button cancel'
          type='submit'
          variant='text'
          size='large'
        >
          No
        </Button>
      </Box>
    </Box>
  </Modal>
)

export default DeleteModal
