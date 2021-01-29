import React from 'react';
import './App.scss';
import { observer, useObserver, useLocalStore } from 'mobx-react-lite';

const App = observer(() => {
  const store = useLocalStore(() => ({ count: 1 }));

  const addOneHandle = () => {
    store.count++;
  };

  const subtractOneHandle = () => {
    store.count++;
  };

  return useObserver(() => (
    <div className="App">
      <header className="App-header">
        <h1 className="name title">React + MobX</h1>
        <h3>Count : {store.count} </h3>
        <button onClick={addOneHandle}>Add 1</button>
        <button onClick={subtractOneHandle}>Subtract 1</button>
      </header>
    </div>
  ))

});

export default App;
