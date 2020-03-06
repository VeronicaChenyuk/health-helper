import React, { useState } from 'react';
import {
Col, Row, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText,
} from 'reactstrap';


const AddDrug = (props) => {
  const {
    buttonLabel,
    className,
  } = props;

  const [modal, setModal] = useState(false);

  return (
    <>
        <FormGroup>
         
          <Row form>
            <Col md={2}>
              <Input style={{ maxWidth: '200px' }} type="text" name="drug" id="exampleDrug" placeholder="Лекарство" />
            </Col>
            <Col md={2}>
              <Input style={{ maxWidth: '200px' }} type="text" name="drug" id="exampleDrug" placeholder="Дозировка" />
            </Col>
            <Col md={2}>
              <Input style={{ maxWidth: '200px' }} type="text" name="drug" id="exampleDrug" placeholder="Частота применения" />
            </Col>
            <Col md={2}>
              <Input style={{ maxWidth: '200px' }} type="text" name="drug" id="exampleDrug" placeholder="до и после еды" />
            </Col>
            <Col md={2}>
              <Input style={{ maxWidth: '200px' }} type="text" name="drug" id="exampleDrug" placeholder="Длительность курса" />
            </Col>
            <Col md={2} />
          </Row>
        </FormGroup>
    </>
  );
};

export default AddDrug;
