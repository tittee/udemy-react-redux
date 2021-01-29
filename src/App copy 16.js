import React, { useReducer } from 'react';
import './App.scss';

const initState = {
  count: 0,
};

const reducerFunction = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count +1 }
    case 'DECREMENT':
      return { count: state.count -1 }
    default: 
      return state;
  }
}

const App = () => {
  const [state, dispatch] = useReducer( reducerFunction , initState );

  const plusOne = () => {
    dispatch({ type: "INCREMENT"});  
  };

  const minusOne = () => {
    dispatch({ type: "DECREMENT"});
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="name title">useReducer Example</h1>
        <h3>Count : {state.count}</h3>
        <button onClick={plusOne} className="btn-primary">Plus +1</button>
        <hr />
        <button onClick={minusOne} className="btn-primary">Minus -1</button>
      </header>
    </div>
  );
};

export default App;
