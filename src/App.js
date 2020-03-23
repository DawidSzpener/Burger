import React, { Component } from 'react';
import './App.css';
import User from './components/User'

class App extends Component {
  state = {
    users: [
      { name: "Dawid" },
      { name: "Seba" },
      { name: "Marek" }
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

  userInputHandler = (event) => {
    this.setState({
      users: [
        { name: "Dawid" },
        { name: event.target.value },
        { name: "Marek" } 
      ]
    })
  }

  render() {

    let users = null 

    if (this.state.usersToggle) {
      users = (
      <div>
        {this.state.users.map(user => {
          return (
          <User name={user.name}/> )
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
