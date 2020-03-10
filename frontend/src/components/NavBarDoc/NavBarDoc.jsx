import React from 'react';

import { Nav } from 'reactstrap';
import { connect } from 'react-redux';
import PatientInfoDoc from './PatientInfoDoc';
import PatientModalCreateMethod from './PatientModalCreateMethod';
import { getMethodicsUser } from '../../redux/actions';
import PationsList from './Components/PationsList';
import './NavBarDoc.css';

async function fetchEmail(props) {
  const { email } = props.user;
  const { getMethodics } = props;

  const res = await fetch('http://localhost:5000/loadmethodic', {
    method: 'POST',
    headers:
  {
    'Content-type': 'application/json',
  },
    body: JSON.stringify({
      email,
    }),
  });
  const result = await res.json();

  if (result) {
    return getMethodics(result);
  }
  return console.error('Что то пошло не так!');
}

function NavBarDoc(props) {
  fetchEmail(props);
  return (
    <>
      <div className="row">
        <div className="col-3">
          <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            {/* <Nav defaultActiveKey="/" className="nav nav-pills nav-fill">
              <PatientModalCreateMethod />
            </Nav> */}
            <PationsList />
          </div>
        </div>
        <div className="col-9">
          <div className="tab-content" id="v-pills-tabContent">
            <div className="tab-pane fade" id="v-pills-methodology" role="tabpanel" aria-labelledby="v-pills-methodology-tab">
              <PatientInfoDoc />
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
const mapStateToProps = (state) => ({
  user: state.logIn.user,
});

const mapDispatchToProps = (dispatch) => ({
  getMethodics: (methodics) => dispatch(getMethodicsUser(methodics)),
});


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavBarDoc);

/*
import React from 'react';

import { Nav, Button } from 'reactstrap';
import PatientInfoDoc from './PatientInfoDoc';

import './NavBarDoc.css'


function patientClick(name) {
  alert(name);
}

function NavBarDoc() {
  const patients = [{ name: 'Иванов Иван' }, { name: 'Петров Петр' }, { name: 'Васильев Василий' }, { name: 'Романов Роман' }, { name: 'Кирилов Кирилл' }];

  const navPatients = patients.map((name) => (
    <>
      <a className="nav-link popo" id="v-pills-methodology-tab" data-toggle="pill" href="#v-pills-methodology" role="tab" aria-controls="v-pills-methodology" aria-selected="false" >{() => patientClick(name.name)}{name.name}</a>
    </>
  ));


  return (
    <>

      <div className="row">
        <div className="col-3">
          <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">

            
            {navPatients}
          </div>
        </div>
        <div className="col-9">
          <div className="tab-content" id="v-pills-tabContent">
            <div className="tab-pane fade" id="v-pills-methodology" role="tabpanel" aria-labelledby="v-pills-methodology-tab"><PatientInfoDoc /></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBarDoc;

 */
