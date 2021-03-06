import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Exercise1 from './exercises/exercise1';
import Exercise2 from './exercises/exercise2';
import Exercise3 from "./exercises/exercise3";
import Exercise4 from "./exercises/exercise4";
import Exercise5 from "./exercises/exercise5";

function Intro() {
  return (
      <React.Fragment>
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          React Workshop
        </p>

        <nav>
          <ul>
            <li>
              <Link to="/exercise-1">Aufgabe 1</Link>
            </li>
            <li>
              <Link to="/exercise-2">Aufgabe 2</Link>
            </li>
            <li>
              <Link to="/exercise-3">Aufgabe 3</Link>
            </li>
            <li>
              <Link to="/exercise-4">Aufgabe 4</Link>
            </li>
            <li>
              <Link to="/exercise-5">Aufgabe 5</Link>
            </li>
          </ul>
        </nav>
      </React.Fragment>
  );
}

function App() {
  return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Route path="/" exact component={Intro}/>
              <Route path="/exercise-1" exact component={Exercise1}/>
              <Route path="/exercise-2" exact component={Exercise2}/>
              <Route path="/exercise-3" exact component={Exercise3}/>
              <Route path="/exercise-4" exact component={Exercise4}/>
              <Route path="/exercise-5" exact component={Exercise5}/>
          </header>
        </div>
      </Router>
  );
}

export default App;