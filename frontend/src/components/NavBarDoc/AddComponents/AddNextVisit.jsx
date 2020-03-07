import React, { useState } from 'react';
import {
  Col, Row, FormGroup, Label, Input,
} from 'reactstrap';


const AddNextVisit = (props) => {
  const {
    buttonLabel,
    className,
  } = props;

  const [modal, setModal] = useState(false);

  return (
    <>
      <FormGroup style={{ inline: true }}>
        <Label for="exampleSelect">Повторное посещение врача</Label>
        <Row form>
          <Col md={6}>
            <Input style={{ maxWidth: '500px' }} type="text" name="drug" id="exampleDrug" placeholder="Дата посещения" />
          </Col>
        </Row>
      </FormGroup>
    </>
  );
};

export default AddNextVisit;
