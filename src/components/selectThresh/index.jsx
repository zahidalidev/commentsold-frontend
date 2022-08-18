import React from 'react'

import 'components/selectThresh/styles.scss'

const SelectThresh = () => {
  const options = [
    { value: '<', label: '<' },
    { value: '>', label: '>' },
    { value: '=', label: '=' },
  ]

  return (
    <div className='thresh-select-container'>
      <select className='thresh-select' name='cars' id='cars'>
        {options.map((item) => (
          <option value={item.value}>{item.label}</option>
        ))}
      </select>
      <input type='number' className='thresh-field' placeholder='Enter threshold value' />
    </div>
  )
}

export default SelectThresh
