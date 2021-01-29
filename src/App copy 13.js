import React, { useState } from 'react';
import './App.scss';
import useCustomFetch from './hooks/useCustomFetch';

const App = () => {
  const [url, setUrl] = useState(null);
  const [data, loading, error] = useCustomFetch(url);

  const getFollowers = (e) => {    
    if(e.key === 'Enter') {
      setUrl("https://api.github.com/users/" + e.target.value);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="name title">Custom Hook : useCustomHook</h1>
        <h2>GitID : </h2>
        {/* <form> */}
          <input onKeyPress={getFollowers} type="text" />
        {/* </form> */}
        { loading && url && <div>Loading...</div> }
        { !loading && data && data.rData && data.rData.followers && (
          <div>Followers : { data.rData.followers } </div>
        ) }
        { error && <div>Error: {error}</div> }
      </header>
    </div>
  );
};

export default App;
