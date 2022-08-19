import { thresholdOptions } from 'utils/constants/inventory'

import 'components/selectFilter/styles.scss'

const SelectFilter = ({ setPrice, setOperator }) => (
  <div className='filter-select-container'>
    <select onChange={(e) => setOperator(e.target.value)} className='filter-select'>
      {thresholdOptions.map((item) => (
        <option key={item.label} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
    <input onChange={(e) => setPrice(e.target.value)} min={1} type='number' className='filter-field' placeholder='Enter threshold value' />
  </div>
)

export default SelectFilter
