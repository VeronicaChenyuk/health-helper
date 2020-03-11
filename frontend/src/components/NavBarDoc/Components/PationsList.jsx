import React from 'react';
import { connect } from 'react-redux';
import { switchCurrentEmail } from '../../../redux/actions';

function currentPatientClick(patientEmail, props) {
  const currentPatientEmail = patientEmail;
  const { switchEmail } = props;

  if (patientEmail) {
    return switchEmail(currentPatientEmail);
  }
  return console.error('switch email not working!');
}


function PationsList(props) {
  const { methodics } = props;
  const navPatients = methodics.map((name) => (
    <>
      <a
        name={name.patientEmail}
        className="nav-link"
        id="v-pills-methodology-tab"
        data-toggle="pill"
        href="#v-pills-methodology"
        role="tab"
        aria-controls="v-pills-methodology"
        aria-selected="false"
        onClick={() => currentPatientClick(name.patientEmail, props)}
      >
        {name.patientName}
      </a>
    </>
  ));
  return (
    <>
      {
        navPatients
      }
    </>
  );
}
const mapStateToProps = (state) => ({
  methodics: state.getInfo.methodics,
});

const mapDispatchToProps = (dispatch) => ({
  switchEmail: (currentPatientEmail) => dispatch(switchCurrentEmail(currentPatientEmail)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PationsList);
