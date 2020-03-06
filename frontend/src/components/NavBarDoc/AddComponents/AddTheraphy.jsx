import React, { useState } from 'react';
import {
  Col, Row, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText,
} from 'reactstrap';


const AddTheraphy = (props) => {
  const {
    buttonLabel,
    className,
  } = props;

  const [modal, setModal] = useState(false);

  return (
    <>
      <FormGroup style={{ inline: true }}>
        <Row form>
          <Col md={4}>
            <Input style={{ maxWidth: '500px' }} type="text" name="drug" id="exampleDrug" placeholder="Название терапии" />
          </Col>
          <Col md={3}>
            <Input style={{ maxWidth: '450px' }} type="text" name="drug" id="exampleDrug" placeholder="Частота" />
          </Col>
          <Col md={3}>
            <Input style={{ maxWidth: '450px' }} type="text" name="drug" id="exampleDrug" placeholder="длительность курса" />
          </Col>
          <Col md={2} />
        </Row>
      </FormGroup>
    </>
  );
};

export default AddTheraphy;
