import React from 'react';
import {
  NavLink, Card, CardImg, CardTitle, CardText, CardDeck, CardBody, Col,
} from 'reactstrap';
import { connect } from 'react-redux';
import PatientModalReport from './PatientModalReport';
import PatientModalChat from './PatientModalChat';
import PatientModalCreateMethod from './PatientModalChangeMethod';
import './PatientInfoDoc.css';
import fist from '../../img/fist.png';
import second from '../../img/second.png';
import third from '../../img/third.png';

function PatientInfoDoc(props) {

  return (
    <>
      <div className="card-deck">
        <div className="card">
          <div className="card-body ">
          <img src={fist} className="card-img-top" />
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
          <img src={second} className="card-img-top" />
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
        </div>
      </div>
    </>
  );
}


// export default PatientInfoDoc;


const mapStateToProps = (state) => ({
  methodics: state.getInfo.methodics,
});

export default connect(
  mapStateToProps,
)(PatientInfoDoc);
