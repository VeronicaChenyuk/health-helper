import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';
import { connect } from 'react-redux';
import Main from '../../scenes/Main/Main.jsx';
import Patient from '../../scenes/Patient/Patient.jsx';
import Doctor from '../../scenes/Doctor/Doctor.jsx';
import Header from '../Header/Header.jsx';

const App = (props) => {
  const { statusUser } = props;
  console.log(props);

  return (
    <>
      <div className="App">
        <Header />
      </div>

      <Switch>
        <Route exact path="/">
          {
              statusUser === 'patient'
                ? <Patient /> : statusUser === 'doctor'
                  ? <Doctor /> : <Main />
            }
        </Route>
      </Switch>
    </>
  );
};

const mapStateToProps = (state) => ({
  statusUser: state.logIn.statusUser,
});

export default connect(
  mapStateToProps,
)(App);
