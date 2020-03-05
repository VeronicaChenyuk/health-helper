import React from 'react';
import {
  Switch,
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import './App.css';
import Header from '../Header/Header.jsx';
import NavBarDoc from '../NavBarDoc/NavBarDoc.jsx'

const App = () => {
  return (
    <>
      
      <Router>
        <div className="App">
          <Header />
        </div>

        <Switch>
          {/* <Route exact path="/home">
            <Header />
          </Route> */}
          <Route path="/">
            <NavBarDoc />
          </Route>
        
         </Switch>
      </Router>
    </>
  );
};

export default App;
