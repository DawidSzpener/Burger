import React from 'react'

const User = (props) => {
  return (
    <div>
      <p>{props.name}</p>
      <input type="text" value={props.name} onChange={props.change}/>
    </div>
  )
}

export default User