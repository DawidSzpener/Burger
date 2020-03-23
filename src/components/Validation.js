import React from 'react'

const Validation = (props) => {
  return (
    <div>
      <p>{props.text < 5 ? "Text too short" : "Text too long"}</p>
    </div>
  )
}

export default Validation