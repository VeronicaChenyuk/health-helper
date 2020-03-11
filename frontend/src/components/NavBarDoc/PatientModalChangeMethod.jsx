import React, { useState } from 'react';
import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter,
} from 'reactstrap';
import { connect } from 'react-redux';
import MainMethodFormChange from './Components/MainMethodFormChange';

const PatientModalChangeMethod = (props) => {
  const {
    className,
  } = props;

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button onClick={toggle} >Изменить методику</Button>
      <Modal isOpen={modal} toggle={toggle} className={className} style={{ minWidth: '1200px', minHeight: '800px' }}>
        <ModalHeader toggle={toggle}>Назначение методики лечения</ModalHeader>
        <ModalBody>
          <MainMethodFormChange toggle={toggle} />
        </ModalBody>
        <ModalFooter>
          <Button color="link" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};


const mapStateToProps = (state) => ({
  methodics: state.getInfo.methodics,
});

export default connect(
  mapStateToProps,
)(PatientModalChangeMethod);
