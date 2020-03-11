import React from 'react';
import './PatientAnalyzesView.css';
import { storage } from '../../firebase';


const PatientAnalyzesView = (props) => {

  const { name, date, url } = props.analysis;

  return (
    <div className="patient-analyzes-view">
      <div className="info-block">
        <h3>{name}</h3>
        <p>{date}</p>
      </div>
      <div className="image-block">
        <img src={url} alt="loading..."></img>
      </div>
    </div>
  )

}


export default PatientAnalyzesView;
