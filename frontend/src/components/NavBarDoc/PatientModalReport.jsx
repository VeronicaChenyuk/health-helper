import React, { useState } from 'react';
import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter,
} from 'reactstrap';
import './PatientModalReport.css';

const PatientModalReport = (props) => {
  console.log(props, 'PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP');

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button onClick={toggle}>Комментарии к лечению</Button>
      <Modal isOpen={modal} toggle={toggle} style={{ minWidth: '1200px', minHeight: '800px' }}>
        <ModalHeader toggle={toggle}>Отчет</ModalHeader>
        <ModalBody>
          Здесь будет красивый сочный отчет
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Do Something</Button>
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default PatientModalReport;
