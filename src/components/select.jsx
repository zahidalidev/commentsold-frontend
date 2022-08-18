import Select from 'react-select'

const AppSelect = ({ selectOptions, placeHolder, setValue }) => (
  <Select
    placeholder={placeHolder}
    options={selectOptions}
    onChange={(e) => setValue(e.value)}
  />
)

export default AppSelect
