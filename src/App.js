import React, { Component } from 'react';
import './App.css';
import User from './components/User'

class App extends Component {
  state = {
    users: [
      { id: 'D', name: "Dawid" },
      { id: 'S', name: "Seba" },
      { id: 'M', name: "Marek" }
    ],
    usersToggle: false
  }

  tyranozaurosHandler = () => {
    this.setState({
      users: [
        { name: "TYRANOZAURUS REX" },
        { name: "TYRANOZAURUS REX" },
        { name: "TYRANOZAURUS REX" }      ]
    })
  }

  toggleUsersHandler = () => {
    const toggle = this.state.usersToggle
    this.setState({
      usersToggle: !toggle
    })
  }

  userInputHandler = ( event, id ) => {

    const userIndex = this.state.users.findIndex((u) => {
      return u.id === id
    })

    const user = {
      ...this.state.users[userIndex]
    }

    user.name = event.target.value

    const users = [...this.state.users]
    users[userIndex] = user

    this.setState({ users: users })
  }

  deleteUserHandler = (userIndex) => {
    const users = [...this.state.users]
    users.splice(userIndex, 1)
    this.setState({
      users: users
    })
  }

  render() {

    let users = null 

    if (this.state.usersToggle) {
      users = (
      <div>
        {this.state.users.map((user, index) => {
          return (
          <User
           name={user.name}
           key={user.id}
           change={(event) => this.userInputHandler(event, user.id)}
           click={this.deleteUserHandler.bind(this, index)}/> )
        })}
      </div>)
    }

    return (
      <div className="App">
        <h1>User List:</h1>
        <button onClick={this.toggleUsersHandler}>Toggle Users</button>
        {users}
      </div>
    );
  }
}

export default App;
