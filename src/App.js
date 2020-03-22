import React, { Component } from 'react';
import './App.css';
import User from './components/User'
import UserOutput from './components/UserOutput'
import UserInput from './components/UserInput'


class App extends Component {
  state = {
    users: [
      { name: "Dawid" },
      { name: "Seba" },
      { name: "Marek" }
    ],
    usernames: [
      { username: "Didasek" },
      { username: "Goozu" }
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

  userInputHandler = (event) => {
    this.setState({
      users: [
        { name: "Dawid" },
        { name: event.target.value },
        { name: "Marek" } 
      ]
    })
  }

  usernameInputHandler = (event) => {
    this.setState({
      usernames: [
      { username: "Didasek" },
      { username: event.target.value }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>User List:</h1>
        <button onClick={this.tyranozaurosHandler}>TYRANOZAURUS REX</button>
        <User name={this.state.users[0].name} />
        <User name={this.state.users[1].name} change={this.userInputHandler}/>
        <User name={this.state.users[2].name} />
        <UserOutput username={this.state.usernames[0].username} text="xxx ccc vvv zzz"/>
        <UserOutput username={this.state.usernames[1].username} text="ppp sss qqq mmm"/>
        <UserInput username={this.state.usernames[1].username} change={this.usernameInputHandler.bind(this)}/>
      </div>
    );
  }
}

export default App;
