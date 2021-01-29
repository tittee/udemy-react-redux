import React, { useState } from 'react';
import './App.scss';
import NameTag from './components/NameTag';

const initialNames = [
  { fname: 'Wittawat', lname: 'Kittiwarabud' },
  { fname: 'Nawaphat', lname: 'Tearasaksri' },
  { fname: 'Nanatchanok', lname: 'Kittiwarabud' },
];

function App() {
  const [age, setAge] = useState(31);
  const ageUpHandled = () => {
    return setAge(age + 1);
  };

  const [names, setNames] = useState(initialNames);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="name title">useState Hook!!</h1>
        <h2>Age : {age} </h2> */}
        <button onClick={ageUpHandled}>Age Up</button>
        <button onClick={() => setAge(age - 1)}>Age Down</button>
      </header>
    </div>
  );
}

export default App;
