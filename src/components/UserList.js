import React from 'react'
import User from './User'

const UserList = (props) => {
  return (
    props.users.map((user, index) => {
      return (
        <User
        name={user.name}
        key={user.id}
        change={(event) => props.changed(event, user.id)}
        click={props.click.bind(this, index)} />
      )})
  )
}

export default UserList