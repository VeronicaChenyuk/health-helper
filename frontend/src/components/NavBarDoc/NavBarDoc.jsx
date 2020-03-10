import React from 'react';

import { Nav, Button } from 'reactstrap';
import PatientInfoDoc from './PatientInfoDoc';
import PatientModalCreateMethod from './PatientModalCreateMethod';


function patientClick(name) {
  alert(name);
}

function NavBarDoc() {
  const patients = [{ name: 'Иванов Иван' }, { name: 'Петров Петр' }, { name: 'Васильев Василий' }, { name: 'Романов Роман' }, { name: 'Кирилов Кирилл' }];

  const navPatients = patients.map((name) => (
    <>
      {/* <Button color="link" onClick={() => patientClick(name.name)}>{name.name}</Button> */}
      <a className="nav-link" id="v-pills-methodology-tab" data-toggle="pill" href="#v-pills-methodology" role="tab" aria-controls="v-pills-methodology" aria-selected="false">{() => patientClick(name.name)}{name.name}</a>
    </>
  ));


  return (
    <>
      {/* <div className="container"> */}
        <div className="row">
          <div className="col-3">
            <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
              
              <Nav defaultActiveKey="/" className="nav nav-pills nav-fill" >

              <PatientModalCreateMethod />

              </Nav>
              {navPatients}
            </div>
          </div>
          <div className="col-9">
            <div className="tab-content" id="v-pills-tabContent">
              <div className="tab-pane fade" id="v-pills-methodology" role="tabpanel" aria-labelledby="v-pills-methodology-tab"><PatientInfoDoc /></div>
            </div>
          </div>
        </div>
      {/* </div> */}
    </>
  );
}

export default NavBarDoc;
