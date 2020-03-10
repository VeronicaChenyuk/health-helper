import React from 'react';
import './PatientAnalyzesView.css';
import { storage } from '../../firebase';


const PatientAnalyzesView = (props) => {
  return (
    <div className="patient-analyzes-view">
      <div className="info-block">
        <h3>{props.analysis.name}</h3>
        <p>{props.analysis.date}</p>
      </div>
      <div className="image-block">
        <img src={props.analysis.url} alt="loading..."></img>
      </div>
    </div>
  )

}


export default PatientAnalyzesView;
