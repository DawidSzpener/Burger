import React from 'react';
import './App.css';
import User from './components/User'

function App() {
  return (
    <div className="App">
      <h1>User List:</h1>
      <User name = "Dawid" />
      <User name = "Seba" />
      <User name = "Marek" />
    </div>
  );
}

export default App;
