import React from 'react'
import './OutputRow.css';

const OutputRow = (props) => {
  return (
    <input type='text' readOnly className='screen' style={props.textType} value={props.value}></input>
  )
}

export default OutputRow