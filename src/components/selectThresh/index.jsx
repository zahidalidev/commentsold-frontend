import { thresholdOptions } from 'utils/constants'

import 'components/selectThresh/styles.scss'

const SelectThresh = ({ setPrice, setOperator }) => (
  <div className='thresh-select-container'>
    <select onChange={(e) => setOperator(e.target.value)} className='thresh-select'>
      {thresholdOptions.map((item) => (
        <option key={item.label} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
    <input onChange={(e) => setPrice(e.target.value)} min={1} type='number' className='thresh-field' placeholder='Enter threshold value' />
  </div>
)

export default SelectThresh
