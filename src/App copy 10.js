import React, { useEffect, useMemo, useState } from 'react';
import './App.scss';
import Child from './components/Child';

function App() {
  const [i, setI] = useState(0);

  const onClickHandle = () => {
    setI(i + 1);
  };

  const memoChild = useMemo(() => {
    return <Child />;
  }, [i]);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="name title">UseMemo</h1>
        <h3>I : {i}</h3>
        <button onClick={onClickHandle}>Increase 1</button>

        <h2>Normal Render</h2>
        <Child />

        <h2>Memo Render</h2>
        {memoChild}
      </header>
    </div>
  );
}

export default App;
