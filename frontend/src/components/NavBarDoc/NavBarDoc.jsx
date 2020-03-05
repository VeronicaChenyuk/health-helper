import React from 'react';

import { Nav, NavLink, Jumbotron, Container } from 'reactstrap';
import { Link, NavLink as RRNavLink } from 'react-router-dom';
import PatientInfoDoc from './PatientInfoDoc.jsx'


function NavBarDoc() {
  const patients = [{ name: 'Ivanov Ivan' }, { name: 'Petrov Petr' }, { name: 'Vasilyev Vasiliy' }, { name: 'Romanov Roman' }, { name: 'Kirillov Kirill' }];
  const navPatients = patients.map((name) => <NavLink to="/" tag={RRNavLink}>{name.name}</NavLink>);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <Nav defaultActiveKey="/" className="flex-column">
              {navPatients}
            </Nav>
          </div>
          <div className="col-9">

           <PatientInfoDoc />


          </div>
        </div>
      </div>
    </>
  );
}

export default NavBarDoc;


