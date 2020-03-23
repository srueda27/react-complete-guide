import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Santi', age: '28' },
      { name: 'Checho', age: '29' }
    ],
    anotherState: "Another State"
  }

  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: 'Santiago', age: '28' },
        { name: 'Checho', age: '29' }
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Eating</Person>
      </div>
    );
  }
}

export default App;
