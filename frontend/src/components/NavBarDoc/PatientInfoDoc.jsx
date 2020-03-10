import React from 'react';
import {
  NavLink, Card, CardImg, CardTitle, CardText, CardDeck, CardBody, Col
} from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PatientModalReport from './PatientModalReport';
import PatientModalChat from './PatientModalChat';
import PatientModalCreateMethod from './PatientModalChangeMethod';
import './PatientInfoDoc.css';
import fist from '../../img/fist.png';
import second from '../../img/second.png';
import third from '../../img/third.png';

function PatientInfoDoc(props) {
  const patients = [{ name: 'Ivanov Ivan' }, { name: 'Petrov Petr' }, { name: 'Vasilyev Vasiliy' }, { name: 'Romanov Roman' }, { name: 'Kirillov Kirill' }];
  const navPatients = patients.map((name) => <NavLink to="/" tag={RRNavLink}>{name.name}</NavLink>);
  const mystyle = {
    Width: '100px',
    Height: '40px',
  };
  return (
    <>
      {/* <CardDeck>
        <Col sm="3">
          <Card body>
            <CardImg top width="80%" src="https://cdn.onlinewebfonts.com/svg/img_370832.png" alt="Show Report" />
            <p>
            <CardTitle>Ход лечения</CardTitle>
            </p>
            
            {patients[0].name}
            выполняет все предписания
            <br />
            Держится молодцом: кровать застилает, чистит зубы
            <br />
            <PatientModalReport />
          </Card>
        </Col>
        <Col sm="3">
        <Card>
          <CardImg top width="80%" src="https://cdn3.iconfinder.com/data/icons/audio-icons-3/377/Repeat_Arrow-512.png" alt="Change action" />
          <CardBody>
            <CardTitle>Методика лечения</CardTitle>
            <CardText>
              {patients[0].name}
              принимает 10 таблеток фенозипама 3 раза в день перед едой!
              <br />
              sm="3">
        <Card style={{ marginLeft: '5px' }}>
          <CardImg top width="100%" src="https://user-images.githubusercontent.com/22866157/40578885-e3bf4e8e-6139-11e8-8be4-92fc3149f6f0.jpg" alt="Support" />
          <CardBody>
            <CardTitle>Связаться с пациентом</CardTitle>
            <CardText>
              Нажав на кнопку, вы откроете чат с
              {patients[0].name}
              , в котором сможете с ним пообщаться.
            </CardText>
            <PatientModalChat />
          </CardBody>
        </Card>
        </Col>
      </CardDeck>ardBody>
        </Card>
        </Col>
        <Col sm="3">
        <Card style={{ marginLeft: '5px' }}>
          <CardImg top width="100%" src="https://user-images.githubusercontent.com/22866157/40578885-e3bf4e8e-6139-11e8-8be4-92fc3149f6f0.jpg" alt="Support" />
          <CardBody>
            <CardTitle>Связаться с пациентом</CardTitle>
            <CardText>
              Нажав на кнопку, вы откроете чат с
              {patients[0].name}
              , в котором сможете с ним пообщаться.
            </CardText>
            <PatientModalChat />
          </CardBody>
        </Card>
        </Col>
      </CardDeck> */}
      <div class="card-deck">
        <div class="card">
          <img src={fist} class="card-img-top"/>
          <div class="card-body " >
            <h5 class="card-title">Ход лечения</h5>
            <p class="card-text">{patients[0].name} выполняет все предписанияб держится молодцом: кровать застилает, чистит зубы </p>
          </div>
          <div class="card-footer">
            <small class="text-muted"> <PatientModalReport /></small>
          </div>
        </div>
        <div class="card">
          <img src={second} class="card-img-top" />
          <div class="card-body">
            <h5 class="card-title">Методика лечения</h5>
            <p class="card-text">{patients[0].name} принимает 10 таблеток фенозипама 3 раза в день перед едой!</p>
          </div>
          <div class="card-footer">
            <small class="text-muted"><PatientModalCreateMethod /></small>
          </div>
        </div>
        <div class="card">
          <img src={third} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Связаться с пациентом</h5>
            <p class="card-text">Нажав на кнопку, вы откроете чат с {patients[0].name}, в котором сможете с ним пообщаться.</p>
          </div>
          <div class="card-footer">
            <small class="text-muted"><PatientModalChat /></small>
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  email: state.logIn.user,
});

// export default PatientInfoDoc;
export default connect(mapStateToProps)(PatientInfoDoc);
