import React from 'react';

import { Nav, NavLink, Button } from 'reactstrap';
import { Link, NavLink as RRNavLink } from 'react-router-dom';
import PatientInfoDoc from './PatientInfoDoc.jsx';
import PatientModalCreateMethod from './PatientModalCreateMethod.jsx'


// function addPatientClick() {
// alert('добавление пациента')

// }


function patientClick(name) {
  alert(name);
}

function NavBarDoc() {
  const patients = [{ name: 'Ivanov Ivan' }, { name: 'Petrov Petr' }, { name: 'Vasilyev Vasiliy' }, { name: 'Romanov Roman' }, { name: 'Kirillov Kirill' }];

  const navPatients = patients.map((name) => (
    <>
      <Button color="link" onClick={() => patientClick(name.name)}>{name.name}</Button>
    </>
  ));


  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-3">         
            <Nav defaultActiveKey="/" className="flex-column">
              <PatientModalCreateMethod />
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
