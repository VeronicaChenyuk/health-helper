import React, { useState } from 'react';
import {
  Col, Row, FormGroup, Input,
} from 'reactstrap';
import { Field, reduxForm } from 'redux-form';


const AddAnalysis = ({ idx }) => (
  <>
    <FormGroup style={{ inline: true }}>
      <Row form>
        <Col md={6}>
          <Field
            style={{ maxWidth: '550px', borderRadius: '5px', height: '35px' }}
            type="text"
            name={`nameOfAnalysis_${idx}`}
            id="nameOfAnalysis"
            placeholder="Введите необходимый анализ"
            component="input"
          />
        </Col>
      </Row>
    </FormGroup>
  </>
);


const AnalysisFields = reduxForm({
  form: 'method',
})(AddAnalysis);


export default AnalysisFields;
