import React, { useEffect, useState } from 'react';
import './App.scss';

let born = false; 

function App() {
  const [growth, setGrowth] = useState(0);
  const [nirvana, setNirvana] = useState(false);

  useEffect(() => {
    if (born) {
      document.title = 'nirvana attained';
    }
  }, [nirvana]);

  useEffect(() => {
    console.log("I 'm born");
  }, []);

  useEffect(() => {
    if (born) {
      console.log('Make mistake and learn');
    } else {
      born = true;
    }

    if (growth > 70) {
      setNirvana(true);
      return function cleanup() {
        console.log('cleanup after mistakes');
      };
    }
  });

  const growHandle = () => {
    setGrowth(growth + 10);
  };


  return (
    <div className="App">
      <header className="App-header">
        <h1 className="name title">UseEffect</h1>
        <h3>Growth: {growth}</h3>
        <button onClick={growHandle}>Learn and Growth</button>
      </header>
    </div>
  );
}

export default App;
