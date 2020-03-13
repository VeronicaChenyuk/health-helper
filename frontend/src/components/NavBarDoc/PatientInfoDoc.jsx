import React from 'react';
import { connect } from 'react-redux';
import PatientModalReport from './PatientModalReport';
import PatientModalChat from './PatientModalChat';
import PatientModalCreateMethod from './PatientModalChangeMethod';
import './PatientInfoDoc.css';
import Statistic from '../Statistic/Statistc';

function PatientInfoDoc(props) {
  return (
    <>
      <Statistic />
      <div className="button-info-doc">
        <PatientModalCreateMethod />
        <PatientModalChat />
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  methodics: state.getInfo.methodics,
});

export default connect(
  mapStateToProps,
)(PatientInfoDoc);
