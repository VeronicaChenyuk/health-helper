import React, { useState } from 'react';

import {
  Nav, NavLink, Card, Button, CardImg, CardTitle, CardText, CardGroup, CardSubtitle, CardBody, Modal, ModalHeader, ModalBody, ModalFooter,
} from 'reactstrap';
import { Link, NavLink as RRNavLink } from 'react-router-dom';
import PatientModalReport from './PatientModalReport.jsx';
import PatientModalChat from './PatientModalChat.jsx';
import PatientModalCreateMethod from './PatientModalChangeMethod.jsx';






function PatientInfoDoc() {
  const patients = [{ name: 'Ivanov Ivan' }, { name: 'Petrov Petr' }, { name: 'Vasilyev Vasiliy' }, { name: 'Romanov Roman' }, { name: 'Kirillov Kirill' }];
  const navPatients = patients.map((name) => <NavLink to="/" tag={RRNavLink}>{name.name}</NavLink>);
  const mystyle = {
    Width: '100px',
    Height: '40px',
  };
  return (
    <>


      <CardGroup>
        <Card>
          <CardImg top width="100%" src="https://cdn.onlinewebfonts.com/svg/img_370832.png" alt="Show Report" />
          <CardBody>
            <CardTitle>Ход лечения</CardTitle>
            {patients[0].name}
            {' '}
            выполняет все предписания
            <br />
            Держится молодцом: кровать застилает, чистит зубы
            <br />
            <PatientModalReport />


          </CardBody>
        </Card>
        <Card>
          <CardImg top width="100%" src="https://cdn3.iconfinder.com/data/icons/audio-icons-3/377/Repeat_Arrow-512.png" alt="Change action" />
          <CardBody>
            <CardTitle>Методика лечения</CardTitle>

            <CardText>
              {' '}
              {patients[0].name}
              {' '}
              принимает 10 таблеток фенозипама 3 раза в день перед едой!
              {' '}
              <br />
              {' '}
              Делает клизму перед сном (5л) вместе со снотворным

            </CardText>
            <PatientModalCreateMethod />
           
          </CardBody>
        </Card>
        <Card>
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
      </CardGroup>

    </>
  );
}

export default PatientInfoDoc;
