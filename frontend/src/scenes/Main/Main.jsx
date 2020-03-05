import React from 'react';
import { connect } from 'react-redux';
import './Main.css';
import LoginForm from '../../components/LoginForm/LoginForm.jsx';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm.jsx';

const Main = (props) => {
  const { isRegForm } = props;
  console.log('REEEEEEEEEEGAAAAAAAAA', props);

  return (
    <div className="main">
      {
        isRegForm ? <RegistrationForm /> : <LoginForm />
      }
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log('statatwet', state);

  return ({
    isRegForm: state.switchFormReducer.isRegForm,
  });
};

export default connect(
  mapStateToProps,
)(Main);
