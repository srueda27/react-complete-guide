import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends Component {

  state = {
    persons: [
      { id: '1', name: 'Santi', age: '28' },
      { id: '2', name: 'Checho', age: '29' }
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

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // const person =  Object.assign({}, this.state.persons[personIndex]);
    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const personsCopy = [...this.state.persons];
    personsCopy[personIndex] = person;
    this.setState({ persons: personsCopy });
  }

  toggledPersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }


  render() {

    let persons = null;

    let btnClasses = [classes.Button];

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <ErrorBoundary key={person.id}>
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                color={person.showPersons}
                changed={(event) => this.nameChangedHandler(event, person.id)} />
            </ErrorBoundary>
          })}
        </div>
      );

      btnClasses.push(classes.Red)
    }

    let assignedClasses = [];

    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }

    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App} >
        <h1>Hi, I'm a React App</h1>
        <p className={assignedClasses.join(' ')}>This is working!</p>
        <button
          className={btnClasses.join(' ')}
          onClick={this.toggledPersonsHandler}>Toggled Persons</button>

        {persons}

      </div>
    );
  }
}

export default App;