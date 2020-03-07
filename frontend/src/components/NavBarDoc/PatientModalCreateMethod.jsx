import React, { useState } from 'react';
import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input,
} from 'reactstrap';


import Drugs from './Components/Drugs';
import Theraphy from './Components/AddTheraphy';
import Analysis from './Components/AddAnalysis';
import AddReports from './AddComponents/AddReports';
import AddNextVisit from './AddComponents/AddNextVisit';

function saveClick() {
  alert('hello');
  const doc = document.getElementById('NewPatient').addEventListener();
  console.log('>>>>>>>>>>', doc);
}

const PatientModalCreateMethod = (props) => {
  const {
    buttonLabel,
    className,
  } = props;

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <>
      <Button color="link" onClick={toggle}>Create</Button>
      <Modal isOpen={modal} toggle={toggle} className={className} style={{ minWidth: '1200px', minHeight: '800px' }}>
        <ModalHeader toggle={toggle}>Назначение методики лечения</ModalHeader>
        <ModalBody>
          <Form id="NewPatient">
            <FormGroup>
              <Label for="exampleEmail">Электронная почта пациента</Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="example@example.com" />
            </FormGroup>

            <Label for="exampleSelect"> Назначение лекарств </Label>
            <Drugs />
            <br />

            <Label for="exampleSelect">Назначение Терапии</Label>
            <Theraphy />
            <br />

            <Label for="exampleSelect">Назначение Анализов</Label>
            <Analysis />
            <br />

            <FormGroup>
              <Label for="exampleText">Comments</Label>
              <Input type="textarea" name="text" id="exampleText" />
            </FormGroup>

            <AddReports />
            <AddNextVisit />

            <FormGroup>
              <Label for="exampleFile">Загрузка необходимых файлов</Label>
              <Input type="file" name="file" id="exampleFile" />
            </FormGroup>
          </Form>
        </ModalBody>

        <ModalFooter>
          <Button color="primary" onClick={() => saveClick()}>Save</Button>
          <Button color="link" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default PatientModalCreateMethod;
