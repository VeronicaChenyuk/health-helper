import React from 'react';
import './PatientAnalyzes.css';
import { storage } from '../../firebase';
import PatientAnalyzesForm from '../PatientAnalyzesForm/PatientAnalyzesForm';
import PatientAnalyzesView from '../PatientAnalyzesView/PatientAnalyzesView';



const PatientAccount = (props) => {
  return (
    <div className="patient-analyzes">
      <PatientAnalyzesForm />
    </div>
  )
  
}



export default PatientAccount;
