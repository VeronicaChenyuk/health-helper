import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';
import Main from '../../scenes/Main/Main.jsx';
import Patient from '../../scenes/Patient/Patient.jsx';
import Doctor from '../../scenes/Doctor/Doctor.jsx';
import Header from '../Header/Header.jsx';

const App = () => (
  <Router>
    <div className="App">
      <Header />
    </div>

    <Switch>
      <Route exact path="/">
        <Main />
      </Route>
      <Route path="/patient">
        <Patient />
      </Route>
      <Route path="/doctor">
        <Doctor />
      </Route>
    </Switch>
  </Router>
);

export default App;
