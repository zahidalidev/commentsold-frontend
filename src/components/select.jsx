import makeAnimated from 'react-select/animated'
import Select from 'react-select'

const animatedComponents = makeAnimated()

const AppSelect = ({ handleFilter }) => {
  const options = [
    { value: 'sku', label: 'sku' },
    { value: 'id', label: 'id' },
  ]

  return (
    <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      placeholder='Filter'
      isMulti
      options={options}
      onChange={handleFilter}
    />
  )
}

export default AppSelect
