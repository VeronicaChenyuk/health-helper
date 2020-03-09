import React from 'react';
import { Col, Row, FormGroup } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';

const AddDrug = ({ idx }) => (
  <>
    <FormGroup>
      <Row form>
        <Col md={2}>
          <Field style={{ maxWidth: '250px', borderRadius: '5px', height: '35px' }} type="text" name={`nameOfDrug_${idx}`} id="drug" placeholder="Лекарство" component="input" />
        </Col>
        <Col md={2}>
          <Field style={{ maxWidth: '250px', borderRadius: '5px', height: '35px' }} type="text" name={`dosage_${idx}`} id="dosage" placeholder="Дозировка" component="input" />
        </Col>
        <Col md={2}>
          <Field style={{ maxWidth: '250px', borderRadius: '5px', height: '35px' }} type="text" name={`frequency_${idx}`} id="frequency" placeholder="Частота применения" component="input" />
        </Col>
        <Col md={2}>
          <Field style={{ maxWidth: '250px', borderRadius: '5px', height: '35px' }} type="text" name={`before/afterEat_${idx}`} id="before/afterEat" placeholder="до или после еды" component="input" />
        </Col>
        <Col md={2}>
          <Field style={{ maxWidth: '250px', borderRadius: '5px', height: '35px' }} type="text" name={`duration_${idx}`} id="duration" placeholder="Длительность курса" component="input" />
        </Col>
        <Col md={2} />
      </Row>
    </FormGroup>
  </>
);

const DrugsFields = reduxForm({
  form: 'method',
})(AddDrug);

export default DrugsFields;
