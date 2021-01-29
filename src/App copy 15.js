import React from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home';
import Deposite from './pages/Deposite';
import WithDraw from './pages/WithDraw';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <h1 className="name title">React + Redux</h1>
          <ul className="list">
            <li className="list__item">
              <NavLink
                to="/"                
                className="list__link"
                exact
                activeClassName="active"
              >
                Home
              </NavLink>
            </li>
            <li className="list__item">
              <NavLink
                to="/deposite"                
                className="list__link"
                exact
                activeClassName="active"
              >
                Deposite
              </NavLink>
            </li>
            <li className="list__item">
              <NavLink
                to="/withdraw"
                exact
                className="list__link"
                activeClassName="active"
              >
                Withdraw
              </NavLink>
            </li>
          </ul>
          <Route path="/" exact component={Home}></Route>
          <Route path="/deposite" exact component={Deposite}></Route>
          <Route path="/withdraw" exact component={WithDraw}></Route>
        </header>
      </div>
    </BrowserRouter>
  );
};

export default App;
