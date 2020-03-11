import React from 'react';
import {
  Col, Row, FormGroup, Label,
} from 'reactstrap';
import { Field, reduxForm } from 'redux-form';

const AddNextVisit = () => (
  <>
    <FormGroup style={{ inline: true }}>
      <Label for="exampleSelect">Повторное посещение врача</Label>
      <Row form>
        <Col md={6}>
          <Field style={{ width: '350px', borderRadius: '5px', height: '35px' }} type="date" name="nextVisit" id="nextVisit" placeholder="Следующее посещение" component="input" />
        </Col>
      </Row>
    </FormGroup>
  </>
);

const NextVisitFields = reduxForm({
  form: 'method',
})(AddNextVisit);

export default NextVisitFields;
