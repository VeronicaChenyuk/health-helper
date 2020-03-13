/* eslint-disable no-nested-ternary */
import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';
import { connect } from 'react-redux';
import Main from '../../scenes/Main/Main';
import Patient from '../../scenes/Patient/Patient';
import Doctor from '../../scenes/Doctor/Doctor';
import Header from '../Header/Header';
import DoctorPage from '../DoctorPage/DoctorPage';

const App = (props) => {
  const { user } = props;


  const statusUser = user ? user.status : false;

  const url = `/personal/${statusUser}`;
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
                ? <Doctor />
                : <Main />
          }
        </Route>
        <Route path={url}>
          {
            statusUser === 'patient'
              ? <Patient /> : statusUser === 'doctor'
                ? <DoctorPage />
                : <Main />
          }
        </Route>
      </Switch>
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.logIn.user,
});

export default connect(
  mapStateToProps,
)(App);
