import React from 'react';
import {
  Col, Row, FormGroup, Label,
} from 'reactstrap';
import { Field } from 'redux-form';

const TheraphiesFields = ({ idx }) => (
  <>
    <FormGroup style={{ inline: true }}>
      <Row form>
        <Col md={3}>
          <Field style={{ width: '250px', borderRadius: '5px', height: '35px' }} type="text" name={`nameOfTheraphy_${idx}`} id="NameOfTheraphy" placeholder="Название терапии" component="input" />
        </Col>
        <Col md={3}>
          <Label> Проводить </Label>
          <Field
            style={{
              width: '40px', borderRadius: '5px', height: '35px', marginLeft: '7px',
            }}
            type="number"
            name={`frequencyOfTheraphy_${idx}`}
            id="frequencyOfTheraphy"
            component="input"
          />
          <Label style={{ marginLeft: '7px' }}> раз(а) в неделю </Label>
        </Col>
        <Col md={3}>
          <Label> Количество сеансов </Label>
          <Field
            style={{
              width: '40px', borderRadius: '5px', height: '35px', marginLeft: '7px',
            }}
            type="text"
            name={`durationOfTheraphy_${idx}`}
            id="durationOfTheraphy"
            component="input"
          />
        </Col>
        <Col md={2} />
      </Row>
    </FormGroup>
  </>
);


export default TheraphiesFields;
