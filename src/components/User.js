import React from 'react'
import '../style/User.css'

const User = (props) => {
  return (
    <div className="User">
      <p>{props.name}</p>
      <input type="text" value={props.name} onChange={props.change}/>
    </div>
  )
}

export default User