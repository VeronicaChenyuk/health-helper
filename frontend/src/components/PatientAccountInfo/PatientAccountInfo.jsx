import React, { useState } from 'react';
import './PatientAccountInfo.css';
import { connect } from 'react-redux';
import { isPatientData } from '../../redux/actions';



const PatientAccountInfo = (props) => {

  const { patientName, photo, diseases } = props.patientData;

  return (
    <div className="patient-info">
      <div className="main-section">
        <img src={photo} alt="avatar" className="patient-avatar" />
        <h3 className="patient-hello">
          {patientName}
        </h3>
      </div>
      <div className="diseases-section">
        <h6>
          Хронические заболевания:
        </h6>
        <p>{diseases}</p>
      </div>
    </div>
  );
};


const mapStateToProps = (state) => ({
  patientData: state.patientDataReducer.isPatientData,
});


export default connect(mapStateToProps)(PatientAccountInfo);
