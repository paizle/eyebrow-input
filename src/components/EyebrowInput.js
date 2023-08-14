import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import './EyebrowInput.scss'

const EyebrowInput = (props) => {

  const {label} = props
  const [value, setValue] = useState('')
  const [hasFocus, setFocus] = useState(false)
  const inputRef = useRef(null)

  return (
    <div className={`EyebrowInput ${(value || hasFocus) ? 'is-raised' : ''}`}>
      <label>
        <span className='label-text'>
          {label}
        </span>
        <input 
          type="text" 
          ref={inputRef} 
          onFocus={() => setFocus(true)}
          onBlur={()=> setFocus(false)}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </label>
    </div>
  )
}

EyebrowInput.propTypes = {
  label: PropTypes.string.isRequired
}

export default EyebrowInput