import React from 'react'
import './button.css'

const Button = (props) => {
  return (
    <div className='btn-container'>
      <button className={props.className} style={{backgroundColor: props.bgColor, fontSize: props.fontSize}} >
        {props.name}
      </button>
    </div>
  )
}

export default Button
