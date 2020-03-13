import React from 'react';
import { connect } from 'react-redux';
import PatientModalReport from './PatientModalReport';
import PatientModalChat from './PatientModalChat';
import PatientModalCreateMethod from './PatientModalChangeMethod';
import './PatientInfoDoc.css';
import fist from '../../img/fist.png';
import second from '../../img/second.png';
import third from '../../img/third.png';
import Statistic from '../Statistic/Statistc';

function PatientInfoDoc(props) {
  return (
    <>
      <div className="card-deck">
        {/* <div className="card">
          <div className="card-body ">
            <img src={fist} className="card-img-top" alt="logo report" />
          </div>
          <div className="card-footer">
            <small className="text-muted">
              {' '}
              <PatientModalReport />
            </small>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <img src={second} className="card-img-top" alt="logo method" />
          </div>
          <div className="card-footer">
            <small className="text-muted"><PatientModalCreateMethod /></small>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <img src={third} className="card-img-top" alt="..." />
          </div>
          <div className="card-footer">
            <small className="text-muted"><PatientModalChat /></small>
          </div>
        </div> */}
        <Statistic />
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
