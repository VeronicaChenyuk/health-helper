import React, { useState } from 'react';
import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter,
} from 'reactstrap';

import MainMethodForm from './Components/MainMethodForm';

const PatientModalCreateMethod = (props) => {
  const {
    buttonLabel,
    className,
  } = props;

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <>
      <img style={{ textAlign: 'left', maxWidth: '70px', maxHeight: '70px' }} src="https://img.icons8.com/cotton/2x/plus.png" onClick={toggle} />
      {/* <Button color="link" onClick={toggle}>Create</Button> */}
      <Modal isOpen={modal} toggle={toggle} className={className} style={{ minWidth: '1200px', minHeight: '800px' }}>
        <ModalHeader toggle={toggle}>Назначение методики лечения</ModalHeader>
        <ModalBody>
          <MainMethodForm />
        </ModalBody>
        <ModalFooter>
          <Button color="link" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default PatientModalCreateMethod;
