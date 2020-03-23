import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: 'Santi', age: '28' },
      { name: 'Checho', age: '29' }
    ],
    anotherState: 'Another State'
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: '28' },
        { name: 'Checho', age: '29' }
      ]
    });
  }

  render() {
    return (
      <div className="App" >
        <h1>Hi, I'm a React App</h1>
        <button onClick={() => this.switchNameHandler('Santiago')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />

        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'JuanSe')}>My Hobbies: Eating</Person>
      </div>
    );
  }
}

export default App;