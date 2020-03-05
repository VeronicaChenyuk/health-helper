import React from 'react';
import { connect } from 'react-redux';
import './Main.css';
import LoginForm from '../../components/LoginForm/LoginForm.jsx';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm.jsx';

const Main = (props) => {
  const { regForm } = props;
  console.log(regForm);

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
