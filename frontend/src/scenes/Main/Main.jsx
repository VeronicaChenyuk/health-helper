import React from 'react';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm.jsx';
import LoginForm from '../../components/LoginForm/LoginForm.jsx';
import './Main.css';

const Main = () => (
  <div className="main">
    <RegistrationForm />
    <LoginForm />
  </div>
);

export default Main;
