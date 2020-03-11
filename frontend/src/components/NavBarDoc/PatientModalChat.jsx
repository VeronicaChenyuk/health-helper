import React, { useState } from 'react';
import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter,
} from 'reactstrap';

const PatientModalReport = (props) => {
  const {
    buttonLabel,
    className,
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button onClick={toggle}>Cвязаться с пациентом</Button>
      <Modal isOpen={modal} toggle={toggle} className={className} style={{ minWidth: '1200px', minHeight: '800px' }}>
        <ModalHeader toggle={toggle}>Письмо Иванову Ивану</ModalHeader>
        <ModalBody>
          Здесь мы будем писать сообщение пациенту
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>SendLetter</Button>
          {' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default PatientModalReport;
