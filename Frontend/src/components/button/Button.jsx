import React from 'react'
import './button.css'

function Button({handleClick}) {
  return (
    <div>
      <button onClick={handleClick} id = "ani_button">+Add</button>
    </div>
  )
}

export default Button
