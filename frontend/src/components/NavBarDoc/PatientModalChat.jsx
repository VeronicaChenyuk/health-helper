import React, { useState } from 'react';
import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter, Input
} from 'reactstrap';
import './PatientModalChat.css'
const PatientModalReport = (props) => {
  const {
    buttonLabel,
    className,
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const saveMessage = async (event) => {
    event.preventDefault();
    const action = event.target.action;
    const textDoctor = event.target.textDoctor.value;
    const email = event.target.email.value;
    const response = await fetch(action, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        textDoctor,
        email,
      })
    })
    const result = await response.json();


  }

  return (
    <div>
      <Button onClick={toggle}>Cвязаться с пациентом</Button>
      <Modal isOpen={modal} toggle={toggle} className={className} style={{ minWidth: '800px', minHeight: '800px' }}>
        <ModalHeader toggle={toggle}>Ваше сообщение</ModalHeader>
        <form method="POST" action='http://localhost:5000/savemessage' >
          <ModalBody>
            <p className ='littleinput'>
              <Input name='email' type='text' defaultValue='Введите почту'></Input>
            </p>
            
            <textarea name="textDoctor" cols="72" rows="4" ></textarea>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" type='submit' onClick={()=>saveMessage()}>Отправить письмо</Button>
            {' '}
            <Button color="secondary" >Выход</Button>
          </ModalFooter>
        </form>
      </Modal>
    </div>
  );
};

export default PatientModalReport;
