import React from 'react';
import './SignInButton.css';
import { connect } from 'react-redux';
import { isLoginForm } from '../../redux/actions';


const SignInButton = (props) => {
  const { isRegForm } = props;
  const switchText = isRegForm ? 'Sign up' : 'Sign in';
  const switchForm = props.isLoginForm;
  return (
    <button type="button" style={{ background: '#FFCCBC' }} className="sign-in btn-link" onClick={() => switchForm()}>{switchText}</button>
  );
};

const mapStateToProps = (state) => ({
  isRegForm: state.switchFormReducer.isRegForm,
});

const mapDispatchToProps = (dispatch) => ({
  isLoginForm: () => dispatch(isLoginForm()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignInButton);
