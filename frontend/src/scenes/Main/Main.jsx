import React from 'react';
import { connect } from 'react-redux';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm.jsx';
import LoginForm from '../../components/LoginForm/LoginForm.jsx';
import './Main.css';

const Main = (props) => {
  const { regForm } = props;
  return (
    <div className="main">
      {
      regForm ? <RegistrationForm /> : <LoginForm />
    }
    </div>
  );
};

const mapStateToProps = (state) => ({
  regForm: state.logIn.regForm,
});

export default connect(
  mapStateToProps,
)(Main);
