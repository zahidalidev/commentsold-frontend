import Select from 'react-select'

const AppSelect = ({
  selectOptions, placeHolder, setValue, value,
}) => (
  <Select
    placeholder={placeHolder}
    options={selectOptions}
    onChange={(e) => setValue(e.value)}
    value={value && { value, label: value }}
  />
)

export default AppSelect
