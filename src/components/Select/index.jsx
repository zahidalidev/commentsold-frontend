import { Box } from '@mui/material'
import Select from 'react-select'

const AppSelect = ({
  selectOptions, placeHolder, setValue, value,
}) => (
  <Box data-testid='select'>
    <Select
      placeholder={placeHolder}
      options={selectOptions}
      onChange={(e) => setValue(e.value)}
      value={value && { value, label: value }}
    />
  </Box>
)

export default AppSelect
