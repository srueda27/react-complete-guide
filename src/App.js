import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: 'Santi', age: '28' },
      { name: 'Checho', age: '29' }
    ],
    anotherState: 'Another State',
    showPersons: false
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];

    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Santi', age: '28' },
        { name: event.target.value, age: '29' }
      ]
    });
  }

  toggledPersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }


  render() {
    const styles = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age} />
          })}
        </div>
      );
    }

    return (
      <div className="App" >
        <h1>Hi, I'm a React App</h1>
        <button
          style={styles}
          onClick={this.toggledPersonsHandler}>Toggled Persons</button>

        {persons}

      </div>
    );
  }
}

export default App;