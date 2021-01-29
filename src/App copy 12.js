import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import './App.scss';

function useDim(el, val) {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    let boundingBox = el.current.getBoundingClientRect();
    setWidth(boundingBox.width);
    setHeight(boundingBox.height);
  }, [val]);
  
  return { width, height };
};

const App = () => {
  const [val, setVal] = useState(2);
  const valEl = useRef(null);

  const {width, height} = useDim(valEl, val);
  
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="name title">useLayoutEffect Hook</h1>

        <h2>Width: {width} | Height: {height}</h2>
        <hr/>
        <div ref={valEl}>{val}</div>
        <button onClick={() => setVal(val   *   10)}>10*</button>
      </header>
    </div>
  );
};

export default App;
