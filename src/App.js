import React, { Component } from 'react';
import './App.css';
import User from './components/User'
import Validation from './components/Validation'
import Char from './components/Char'

class App extends Component {
  state = {
    users: [
      { id: 'D', name: "Dawid" },
      { id: 'S', name: "Seba" },
      { id: 'M', name: "Marek" }
    ],
    usersToggle: false,
    inputText: ""
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

  inputChangeHandler = (event) => {
    this.setState({
      inputText: event.target.value
    })
  }

  letterRemovalHandler = (index) => {
    const text = this.state.inputText.split('')
    text.splice(index, 1)
    const newText = text.join('')
    this.setState({ inputText: newText})
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

    const charList = this.state.inputText.split('').map((char, index) => {
      return (
        <Char
          letter={char}
          key={index}
          delete={() => this.letterRemovalHandler(index)}/>
      )
    })

    return (
      <div className="App">
        <input type="text" onChange={this.inputChangeHandler}/>
        <p>{this.state.inputText.length}</p>
        <Validation text={this.state.inputText.length}/>
        {charList}
        <h1>User List:</h1>
        <button onClick={this.toggleUsersHandler}>Toggle Users</button>
        {users}
      </div>
    );
  }
}

export default App;
