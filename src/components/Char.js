import React from 'react'
import '../style/Char.css'

const Char = (props) => {

  return (
    <div className="Char">
      <p onClick={props.delete}>{props.letter}</p>
    </div>
  )
}

export default Char