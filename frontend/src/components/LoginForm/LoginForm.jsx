import React from 'react';
import {
  Button, Form, FormGroup, Label, Input,
} from 'reactstrap';
import './LoginForm.css';

const LoginForm = (props) => (
  <Form className="loginForm" action="/patient">
    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
      <Label for="exampleEmail" className="mr-sm-2">Email</Label>
      <Input type="email" name="email" id="exampleEmail" placeholder="fox@fox.ru" required />
    </FormGroup>
    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
      <Label for="examplePassword" className="mr-sm-2">Password</Label>
      <Input type="password" name="password" id="examplePassword" placeholder="don't tell!" required />
    </FormGroup>
    <Button type="submit" className="loginBtn">Login</Button>
  </Form>
);

export default LoginForm;
