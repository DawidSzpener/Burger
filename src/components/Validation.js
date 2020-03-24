import React from 'react'

const Validation = (props) => {
  return (
    <div>
      {props.text.length < 5 ? "Text too short!" : "Text long enough"}
    </div>
  )
}

export default Validation