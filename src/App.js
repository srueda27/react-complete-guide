import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {

  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Santi', age: '28' },
      { name: 'Checho', age: '29' }
    ]
  });

  const [anotherState, setAnotherState] = useState('Another State');

  console.log(anotherState, personsState)

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: 'Santiago', age: '28' },
        { name: 'Checho', age: '29' }
      ]
    });
  }

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbies: Eating</Person>
    </div>
  );

}

export default App;