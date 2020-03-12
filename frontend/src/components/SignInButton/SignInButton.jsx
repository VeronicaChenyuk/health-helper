import React from 'react';
import './SignInButton.css';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import { isLoginForm } from '../../redux/actions';


const SignInButton = (props) => {
  const { isRegForm } = props;
  const switchText = isRegForm ? 'Создать учетную запись' : 'Уже есть учетная запись? Войти';
  const switchForm = props.isLoginForm;
  return (
    <Button color="link" type="button" onClick={() => switchForm()}>{switchText}</Button>
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
