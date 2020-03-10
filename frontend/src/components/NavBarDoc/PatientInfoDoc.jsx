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
          <img src={fist} className="card-img-top" />
          <div className="card-body ">
            <h5 className="card-title">Ход лечения</h5>
            <p className="card-text"> выполняет все предписанияб держится молодцом: кровать застилает, чистит зубы </p>
          </div>
          <div className="card-footer">
            <small className="text-muted">
              {' '}
              <PatientModalReport />
            </small>
          </div>
        </div>
        <div className="card">
          <img src={second} className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">Методика лечения</h5>
            <p className="card-text"> принимает 10 таблеток фенозипама 3 раза в день перед едой!</p>
          </div>
          <div className="card-footer">
            <small className="text-muted"><PatientModalCreateMethod /></small>
          </div>
        </div>
        <div className="card">
          <img src={third} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Связаться с пациентом</h5>
            <p className="card-text">Нажав на кнопку, вы откроете чат с , в котором сможете с ним пообщаться.</p>
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
