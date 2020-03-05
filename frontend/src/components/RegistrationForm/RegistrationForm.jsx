import React from 'react';
import {
  Button, Form, FormGroup, Label, Input,
} from 'reactstrap';
import './RegistrationForm.css';
// import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
// import { isLogined } from '../../redux/actions';

// const createUser = async (event, props) => {
//   event.preventDefault();

//   const login = event.target.login.value;
//   const email = event.target.email.value;
//   const password = event.target.password.value;
//   const isLogin = props.isLogined;
//   const response = await fetch('http://localhost:5000/auth/registration', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       login, email, password,
//     }),
//   });
//   const result = await response.json();
//   if (result.answer) {
//     isLogin(login);
//     return props.history.push('/');
//   }
//   alert('Что то пошло не так!');

//   return true;
// };

const RegistrationForm = (props) => (
  <Form className="registrationForm" action="/doctor">
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
        <option>Patient</option>
        <option>Doctor</option>
      </Input>
    </FormGroup>
    <Button type="submit" className="registrationBtn">Registration</Button>
  </Form>
);

export default RegistrationForm;
// const mapStateToProps = (state) => ({
//   auth: state.auth,
//   userName: state.userName,
// });

// const mapDispatchToProps = (dispatch) => ({
//   isLogined: (userName) => dispatch(isLogined(userName)),
// });

// export default withRouter(connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(RegistrationForm));
