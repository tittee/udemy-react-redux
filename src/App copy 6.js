import React, { useEffect, useRef } from 'react';
import './App.scss';
import Input from './components/Input/Input';

const inputStyle = {
  width: '400px',
  heigth: '50px',
  fontSize: '30px',
  marginBottom: '10px',
};

function App() {
  const firstNameRef = useRef();
  const lastNameRef = useRef();

  useEffect(() => {
    firstNameRef.current.focus();
  }, []);

  function firstNameKeyDown(e) {
    if (e.key === 'Enter') {
      lastNameRef.current.focus();
    }
  }
  function lastNameKeyDown(e) {}

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="name title">UseRefs Hook</h1>
        <Input
          ref={firstNameRef}
          placeholder="Firstname here"
          style={inputStyle}
          onKeyDown={firstNameKeyDown}
        />
        <Input
          ref={lastNameRef}
          placeholder="Lastname here"
          style={inputStyle}
          onKeyDown={lastNameKeyDown}
        />
      </header>
    </div>
  );
}

export default App;
