import { thresholdOptions } from 'utils/constants'

import 'components/selectThresh/styles.scss'

const SelectThresh = () => (
  <div className='thresh-select-container'>
    <select className='thresh-select'>
      {thresholdOptions.map((item) => (
        <option value={item.value}>{item.label}</option>
      ))}
    </select>
    <input min={1} type='number' className='thresh-field' placeholder='Enter threshold value' />
  </div>
)

export default SelectThresh
