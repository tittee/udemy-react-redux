import React, { useEffect, useState } from 'react';
import {
  BrowserRouter,
  Route,
  Link,
  NavLink,
  Redirect,
  Prompt,
} from 'react-router-dom';
import './App.scss';
import About from './pages/About';
import Home from './pages/Home';
import MsgContext from './context/MsgContext';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [age, setAge] = useState(0);
  const [msg, setMsg] = useState('Im newbie React');
  const loggedInClick = () => {
    setLoggedIn(!loggedIn);
  };
  const ageHandle = (e) => {
    setAge(e.target.value);
  };

  return (
    <BrowserRouter>
      <MsgContext.Provider value={[msg, setMsg]}>
        <div className="App">
          <header className="App-header">
            <ul className="list">
              <li className="list__item">
                <NavLink
                  className="list__link"
                  to="/"
                  exact
                  activeClassName="active"
                >
                  Home
                </NavLink>
              </li>
              <li className="list__item">
                <NavLink
                  className="list__link"
                  to="/about"
                  exact
                  activeClassName="active"
                >
                  About
                </NavLink>
              </li>
              <li className="list__item">
                <NavLink
                  className="list__link"
                  to="/user/wittawat"
                  exact
                  activeClassName="active"
                >
                  Wittawat
                </NavLink>
              </li>
            </ul>
            <Prompt
              when={loggedIn && !age}
              message={() => {
                return window.location.pathname.startsWith('user')
                  ? true
                  : 'Are you sure?';
              }}
            ></Prompt>
            {/* {loggedIn.toString()} */}
            <button className="btn-primary" onClick={loggedInClick}>
              {!loggedIn ? 'Login' : 'Logout'}
            </button>
            <h1 className="name title">React Router Dom</h1>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route
              path="/user/:username"
              exact
              render={({ match }) => {
                return loggedIn ? (
                  <>
                    <h2>Welcome User : {match.params.username}</h2>
                    <h3>Age : {age}</h3>
                    <input type="text" value={age} onChange={ageHandle} />
                  </>
                ) : (
                  <Redirect to="/" />
                );
              }}
            />
          </header>
        </div>
      </MsgContext.Provider>
    </BrowserRouter>
  );
};

export default App;
