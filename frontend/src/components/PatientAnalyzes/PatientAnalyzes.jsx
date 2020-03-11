import React from 'react';
import { connect } from 'react-redux';
import './PatientAnalyzes.css';
import PatientAnalyzesForm from '../PatientAnalyzesForm/PatientAnalyzesForm';
import PatientAnalyzesView from '../PatientAnalyzesView/PatientAnalyzesView';
import { storage } from '../../firebase';


const PatientAnalyzes = (props) => {

  const analysisList = props.analyzes.map((analysis, index) => (
    <li key={index}><PatientAnalyzesView analysis={analysis} /></li>
  ));

  return (
    <div>
      <PatientAnalyzesForm />
      <div className="analyzes-list">
        <ul>
          {analysisList}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  analyzes: state.analyzesReducer,
});


export default connect(mapStateToProps)(PatientAnalyzes);
