import React, { useState } from 'react';
import './App.scss';

function App() {
  const [name, setName] = useState('Default');
  const [income, setIncome] = useState('high');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleIncomeChange = (e) => {
    setIncome(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('state =', name, income);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="name title">onChange Event!!</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <span>Name : </span>
            <input type="text" value={name} onChange={handleNameChange} />
          </div>
          <div>
            <span>Income : </span>
            <select value={income} onChange={handleIncomeChange}>
              <option value="high">High</option>
              <option value="middel">Meddle</option>
              <option value="low">Low</option>
            </select>
            <button type="submit">Submit</button>
          </div>
        </form>
      </header>
    </div>
  );
}

export default App;
