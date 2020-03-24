import React, { Component } from 'react';
import './App.css';
import UserList from './components/UserList'

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

    const style = {
      backgroundColor: "green",
      color: "white",
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let users = null 

    if (this.state.usersToggle) {
      users = (
      <div>
        <UserList 
          users={this.state.users}
          changed={this.userInputHandler}
          click={this.deleteUserHandler}/>
      </div>)

      style.backgroundColor = "red"
    }

    const classes = []

    if (this.state.users.length <= 2) {
      classes.push('red')
    }

    if (this.state.users.length <= 1) {
      classes.push('bold')
    }

    return (
      <div className="App">
        <h1>User List:</h1>
        <p className={classes.join(' ')}>Some text with dunamic classes</p>
        <button style={style} onClick={this.toggleUsersHandler}>Toggle Users</button>
        {users}
      </div>
    );
  }
}

export default App;
