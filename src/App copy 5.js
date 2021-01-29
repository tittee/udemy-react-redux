import React, { useEffect, useRef } from 'react';
import './App.scss';

function App() {
  const nameRef = useRef();
  const ageRef = useRef();
  const marriedRef = useRef();
  const submitRef = useRef();

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  const keyPressHandle = (e) => {
    if (e.keyCode === 13) {
      if (e.target.id === 'nameInput') {
        ageRef.current.focus();
      }
      if (e.target.id === 'ageInput') {
        marriedRef.current.focus();
      }
      if (e.target.id === 'marriedInput') {
        submitRef.current.focus();
      }
    }
  };

  const onclickHandle = (e) => {
    e.preventDefault();
    alert('submitted');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="name title">UseRefs Hook</h1>
        <form>
          <div className="field">
            <span>Name : </span>
            <input
              type="text"
              id="nameInput"
              ref={nameRef}
              onKeyDown={keyPressHandle}
            />
          </div>
          <div className="field">
            <span>Age : </span>
            <input
              type="text"
              id="ageInput"
              ref={ageRef}
              onKeyDown={keyPressHandle}
            />
          </div>
          <div className="field">
            <span>Married : </span>
            <input
              type="checkbox"
              id="marriedInput"
              ref={marriedRef}
              onKeyDown={keyPressHandle}
            />
          </div>
          <button
            type="submit"
            id="submitInput"
            ref={submitRef}
            onKeyDown={keyPressHandle}
            onClick={onclickHandle}
          >
            Submit
          </button>
        </form>
      </header>
    </div>
  );
}

export default App;
