import React, { Component } from 'react'
import '../style/User.css'

class User extends Component {
  render() {
    return (
      <div className="User">
        <p onClick={this.props.click}> {this.props.name} </p>
        <input type="text" value={this.props.name} onChange={this.props.change}/>
      </div>
    )
  }
}

export default User