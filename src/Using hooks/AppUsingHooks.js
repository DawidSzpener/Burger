import React, { useState } from 'react'
import './App.css'
import User from './components/User'

const app = () => {

  const [ userState, setUserState ] = {
    users: [
      { name: "Dawid" },
      { name: "Seba" },
      { name: "Marek" }
    ]
  }

  const tyranozaurusHandler = () => {
    setUserState({
      users: [
        { name: "TYRANOZAURUS REX" },
        { name: "TYRANOZAURUS REX" },
        { name: "TYRANOZAURUS REX" }
      ]
    })
  }


  return (
    <div className="App">
      <button onClick={tyranozaurusHandler}>TYRANOZAURUS</button>
      <h1>User List:</h1>
      <User name={userState.user[0].name}/>
      <User name={userState.user[1].name}/>
      <User name={userState.user[2].name}/>
    </div>
  )
}

export default app