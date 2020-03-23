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
    return (
      <div className="App">
        <h1>User List:</h1>
        <button onClick={this.toggleUsersHandler}>Toggle Users</button>
        { this.state.usersToggle ? 
        <div>
          <User name={this.state.users[0].name} />
          <User name={this.state.users[1].name} change={this.userInputHandler}/>
          <User name={this.state.users[2].name} />
        </div> : null
        }
      </div>
    );
  }
}

export default App;
