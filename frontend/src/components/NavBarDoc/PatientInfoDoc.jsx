import React from 'react';
import {
  NavLink, Card, CardImg, CardTitle, CardText, CardDeck, CardBody,
} from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';
import PatientModalReport from './PatientModalReport';
import PatientModalChat from './PatientModalChat';
import PatientModalCreateMethod from './PatientModalChangeMethod';
import { connect } from 'react-redux';
import store from '../../redux/store';

function PatientInfoDoc() {

  // const mapStateToProps = (state) => ({
  //   email: state.logIn.email,
  // });
  
  // console.log(props.email);


  // const res = await fetch('http://localhost:5000/loadmethodic', {
  //   method: 'POST',
  //   headers:
  //   {
  //     'Content-type': 'application/json',
  //   },
  //   body: JSON.stringify({
  //     props.email,
  //   }),
  // });


  const patients = [{ name: 'Ivanov Ivan' }, { name: 'Petrov Petr' }, { name: 'Vasilyev Vasiliy' }, { name: 'Romanov Roman' }, { name: 'Kirillov Kirill' }];
  const navPatients = patients.map((name) => <NavLink to="/" tag={RRNavLink}>{name.name}</NavLink>);
  const mystyle = {
    Width: '100px',
    Height: '40px',
  };
  return (
    <>
      <CardDeck>
        <Card>
          <CardImg top width="100%" src="https://cdn.onlinewebfonts.com/svg/img_370832.png" alt="Show Report" />

          <CardBody>
            <CardTitle>Ход лечения</CardTitle>
            {patients[0].name}
            выполняет все предписания
            <br />
            Держится молодцом: кровать застилает, чистит зубы
            <br />
            <PatientModalReport />
          </CardBody>
        </Card>
        <Card>
          <CardImg top width="80%" src="https://cdn3.iconfinder.com/data/icons/audio-icons-3/377/Repeat_Arrow-512.png" alt="Change action" />
          <CardBody>
            <CardTitle>Методика лечения</CardTitle>
            <CardText>
              {patients[0].name}
              принимает 10 таблеток фенозипама 3 раза в день перед едой!
              <br />
              Делает клизму перед сном (5л) вместе со снотворным
            </CardText>
            <PatientModalCreateMethod />
          </CardBody>
        </Card>
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
      </CardDeck>

    </>
  );
}

export default PatientInfoDoc;
