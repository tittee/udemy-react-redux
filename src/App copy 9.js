import React, { useEffect, useState } from 'react';
import './App.scss';

const initProfile = {
  followers: null,
  publicRepos: null,
};

function App() {
  const [profile, setProfile] = useState('');

  const getProfile = async () => {
    const response = await fetch('https://api.github.com/users/tittee');
    const json = await response.json();

    setProfile({
      followers: json.followers,
      publicRepos: json.public_repos,
    });
  };

  useEffect(() => {
    getProfile();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="name title">Fetch Data with Async, Await</h1>

        <h3>{`follower: ${profile.followers}, repos: ${profile.publicRepos}`}</h3>
      </header>
    </div>
  );
}

export default App;
