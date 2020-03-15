import React from 'react';
import './PatientAnalyzesView.css';

const PatientAnalyzesView = (props) => {
  const { analysis } = props;
  const { name, date, url } = analysis;

  return (
    <div className="patient-analyzes-view">
      <div className="info-block">
        <h3>{name}</h3>
        <p>{date}</p>
      </div>
      <div className="image-block">
        <img src={url} alt="loading..." />
      </div>
    </div>
  );
};


export default PatientAnalyzesView;
