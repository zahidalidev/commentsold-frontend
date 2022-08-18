import makeAnimated from 'react-select/animated'
import Select from 'react-select'

import { selectOptions } from 'utils/constants'

const animatedComponents = makeAnimated()

const AppSelect = ({ handleFilter }) => (
  <Select
    closeMenuOnSelect={false}
    components={animatedComponents}
    placeholder='Filter'
    isMulti
    options={selectOptions}
    onChange={handleFilter}
  />
)

export default AppSelect
