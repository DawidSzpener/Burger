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

  tyranozaurosHandler = () => {
    this.setState({
      users: [
        { name: "TYRANOZAURUS REX" },
        { name: "TYRANOZAURUS REX" },
        { name: "TYRANOZAURUS REX" }      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>User List:</h1>
        <button onClick={this.tyranozaurosHandler}>TYRANOZAURUS REX</button>
        <User name = {this.state.users[0].name} />
        <User name = {this.state.users[1].name} />
        <User name = {this.state.users[2].name} />
      </div>
    );
  }
}

export default App;
