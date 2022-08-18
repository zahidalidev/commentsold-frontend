import makeAnimated from 'react-select/animated'
import Select from 'react-select'

import { selectOptions } from 'utils/constants'

const animatedComponents = makeAnimated()

const AppSelect = ({ handleFilter }) => (
  <Select
    components={animatedComponents}
    placeholder='Filter'
    options={selectOptions}
    onChange={handleFilter}
  />
)

export default AppSelect
