import React from 'react';
import Header from '../../components/Header/Header.jsx';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm.jsx';
import LoginForm from '../../components/LoginForm/LoginForm.jsx';
import './Main.css';

const Main = () => (
  <>
    <Header />
    <div className="main">
      <RegistrationForm />
      <LoginForm />
    </div>
  </>
);

export default Main;
