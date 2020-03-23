import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <Person name="Santi" age="28" />
        <Person name="Checho" age="29">My Hobbies: Eating</Person>
      </div>
    );
  }
}

export default App;
