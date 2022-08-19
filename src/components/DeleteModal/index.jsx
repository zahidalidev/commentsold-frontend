import {
  Box, Button, Modal, Typography,
} from '@mui/material'

import './styles.scss'

const DeleteModal = ({ show, handleDelete, setConfirmModal }) => (
  <Modal data-testid='modal-container' open={show}>
    <Box className='modal-confirm-box'>
      <Box className='header'>
        <Typography variant='h5'>Delete Confirmation</Typography>
        <Typography className='description'>
          Are you sure you want to delete?
        </Typography>
      </Box>
      <Box className='button-container'>
        <Button
          onClick={handleDelete}
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
