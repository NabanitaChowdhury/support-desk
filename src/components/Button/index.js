import React from 'react'
import './Button.css'

const Button = ({text, onClick}) => {
  return (
   <button onClick={onClick} className='button-class'>{text}</button>
  )
}

export default Button