import React from 'react';

import { Nav, Button } from 'reactstrap';
import PatientInfoDoc from './PatientInfoDoc';
import PatientModalCreateMethod from './PatientModalCreateMethod';


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
      <Button style={{ textAlign: 'left' }} color="link" onClick={() => patientClick(name.name)}>{name.name}</Button>
    </>
  ));


  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-2">
            <Nav defaultActiveKey="/" className="flex-column">
              <PatientModalCreateMethod />
              {navPatients}
            </Nav>

          </div>
          <div className="col-10">

            <PatientInfoDoc />


          </div>
        </div>
      </div>
    </>
  );
}

export default NavBarDoc;
