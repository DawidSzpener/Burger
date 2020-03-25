import React, { Component } from 'react'
import User from './User'

class UserList extends Component {
  render() {
    return (
      this.props.users.map((user, index) => {
        return (
          <User
          name={user.name}
          key={user.id}
          change={(event) => this.props.changed(event, user.id)}
          click={this.props.click.bind(this, index)} />
        )})
    )
  }
}

export default UserList