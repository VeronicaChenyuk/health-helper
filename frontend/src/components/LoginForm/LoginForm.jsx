import React from 'react';
import {
  Button, Form, FormGroup, Label, Input,
} from 'reactstrap';
import './LoginForm.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { isLogined } from '../../redux/actions';
import SignInButton from '../SignInButton/SignInButton';

const createUser = async (event, props) => {
  event.preventDefault();

  const email = event.target.email.value;
  const password = event.target.password.value;
  const isLogin = props.isLogined;
  const response = await fetch('http://localhost:5000/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email, password,
    }),
  });
  const result = await response.json();
  if (result.answer) {
    const { login, status } = result;
    isLogin(login, status, email);
    return props.history.push('/');
  }
  return alert('Что то пошло не так!');
};

const LoginForm = (props) => (
  <>
    <Form className="loginForm" onSubmit={(event) => createUser(event, props)}>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="exampleEmail" className="mr-sm-2">Email</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="fox@fox.ru" required />
      </FormGroup>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="examplePassword" className="mr-sm-2">Password</Label>
        <Input type="password" name="password" id="examplePassword" placeholder="don't tell!" required />
      </FormGroup>
      <Button type="submit" className="loginBtn">Login</Button>
      <SignInButton />
    </Form>
  </>
);

const mapStateToProps = (state) => ({
  auth: state.auth,
  userName: state.userName,
});

const mapDispatchToProps = (dispatch) => ({
  isLogined: (userName, statusUser, email) => dispatch(isLogined(userName, statusUser, email)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginForm));
