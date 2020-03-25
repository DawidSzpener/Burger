import React, { Component } from 'react';
import './App.css';
import UserList from './components/UserList'
import Cockpit from './components/Cockpit'

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

  shouldComponentUpdate() {
    console.log("Should component update?")
    return true
  }

  componentDidUpdate() {
    console.log("Component did update")
  }

  componentDidMount() {
    console.log("Component did mount")
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
    return (
      <div className="App">
        <Cockpit 
        clicked={this.toggleUsersHandler}
        style={style}
        length={this.state.users.length}/>
        {users}
      </div>
    );
  }
}

export default App;
