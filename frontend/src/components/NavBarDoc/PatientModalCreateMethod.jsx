import React, { useState } from 'react';
import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter,
} from 'reactstrap';

import MainMethodForm from './Components/MainMethodForm';

const PatientModalCreateMethod = (props) => {
  const {
    className,
  } = props;

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <>
      <Button onClick={toggle}>Создать</Button>
      <Modal isOpen={modal} toggle={toggle} className={className} style={{ minWidth: '95%', minHeight: '95%px' }}>
        <ModalHeader toggle={toggle}>Назначение методики лечения</ModalHeader>
        <ModalBody>
          <MainMethodForm toggle={toggle} />
        </ModalBody>
        <ModalFooter>
          <Button color="link" onClick={toggle}>Закрыть</Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default PatientModalCreateMethod;
