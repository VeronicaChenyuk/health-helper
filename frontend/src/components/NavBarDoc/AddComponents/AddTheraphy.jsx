import React from 'react';
import { Col, Row, FormGroup } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';

const AddTheraphy = ({ idx }) => (
  <>
    <FormGroup style={{ inline: true }}>
      <Row form>
        <Col md={3}>
          <Field style={{ width: '250px', borderRadius: '5px', height: '35px' }} type="text" name={`nameOfTheraphy_${idx}`} id="NameOfTheraphy" placeholder="Название терапии" component="input" />
        </Col>
        <Col md={3}>
          <Field style={{ width: '250px', borderRadius: '5px', height: '35px' }} type="text" name={`frequencyOfTheraphy_${idx}`} id="frequencyOfTheraphy" placeholder="Частота терапии" component="input" />
        </Col>
        <Col md={3}>
          <Field style={{ width: '250px', borderRadius: '5px', height: '35px' }} type="text" name={`durationOfTheraphy_${idx}`} id="durationOfTheraphy" placeholder="Длительность курса" component="input" />
        </Col>
        <Col md={2} />
      </Row>
    </FormGroup>
  </>
);

const TheraphiesFields = reduxForm({
  // a unique name for the form
  form: 'method',
})(AddTheraphy);
export default TheraphiesFields;
