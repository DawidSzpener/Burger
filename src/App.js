import React, { Component } from 'react';
import './App.css';
import User from './components/User'

class App extends Component {
  state = {
    users: [
      { name: "Dawid" },
      { name: "Seba" },
      { name: "Marek" }
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>User List:</h1>
        <User name = {this.state.users[0].name} />
        <User name = {this.state.users[1].name} />
        <User name = {this.state.users[2].name} />
      </div>
    );
  }
}

export default App;
