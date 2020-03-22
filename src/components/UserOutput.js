import React from 'react'
import '../style/UserOutput.css'

const UserOutput = (props) => {
  return (
    <div className="UserOutput">
      <p>{props.username}</p>
      <p>{props.text}</p>
    </div>
  )
}

export default UserOutput