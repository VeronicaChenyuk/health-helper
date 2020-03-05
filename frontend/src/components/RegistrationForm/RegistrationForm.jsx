import React, { useState } from 'react';
import {
  Button, Form, FormGroup, Label, Input,
} from 'reactstrap';
import './RegistrationForm.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { isLogined, isLoginForm } from '../../redux/actions';
import SignInButton from '../SignInButton/SignInButton.jsx';

const createUser = async (event, props) => {
  event.preventDefault();

  const login = event.target.login.value;
  const email = event.target.email.value;
  const password = event.target.password.value;
  const statusUser = event.target.statusUser.value;
  const isLogin = props.isLogined;

  const response = await fetch('http://localhost:5000/auth/registration', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      login, email, password, statusUser,
    }),
  });
  const result = await response.json();
  const { status } = result;
  if (status) {
    isLogin(login, status);
    return props.history.push('/');
  }
  // alert('Что то пошло не так!');

  // return true;
};

const RegistrationForm = (props) => (
  <>
    <Form className="registrationForm" onSubmit={(event) => createUser(event, props)}>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="exampleLogin" className="mr-sm-2">Login</Label>
        <Input type="text" name="login" id="exampleLogin" placeholder="your login" required />
      </FormGroup>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="exampleEmail" className="mr-sm-2">Email</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="fox@fox.ru" required />
      </FormGroup>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="examplePassword" className="mr-sm-2">Password</Label>
        <Input type="password" name="password" id="examplePassword" placeholder="don't tell!" required />
      </FormGroup>
      <FormGroup>
        <Label for="exampleSelect">Status</Label>
        <Input type="select" name="statusUser" id="exampleStatusUser">
          <option>patient</option>
          <option>doctor</option>
        </Input>
      </FormGroup>
      <Button type="submit" className="registrationBtn">Registration</Button>
    </Form>
    <SignInButton onClick={() => isLoginForm()} />
  </>
);

const mapStateToProps = (state) => ({
  auth: state.auth,
  userName: state.userName,
});

const mapDispatchToProps = (dispatch) => ({
  isLogined: (userName, statusUser) => dispatch(isLogined(userName, statusUser)),
  isLoginForm: () => dispatch(isLoginForm()),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(RegistrationForm));
