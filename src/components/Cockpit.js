import React from 'react'

const Cockpit = (props) => {

  const classes = []

  if (props.length <= 2) {
    classes.push('red')
  }

  if (props.length <= 1) {
    classes.push('bold')
  }

  return (
    <div>
      <h1>User List:</h1>
      <p className={classes.join(' ')}>Some text with dunamic classes</p>
      <button style={props.style} onClick={props.clicked}>Toggle Users</button>
    </div>
  )
}

export default Cockpit