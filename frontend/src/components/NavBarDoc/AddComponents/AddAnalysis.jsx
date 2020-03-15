import React from 'react';
import {
  Col, Row, FormGroup,
} from 'reactstrap';
import { Field } from 'redux-form';


const AnalysisFields = ({ idx }) => (
  <>
    <FormGroup style={{ inline: true }}>
      <Row form>
        <Col md={6}>
          <Field
            style={{ minWidth: '450px', borderRadius: '5px', height: '35px' }}
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

export default AnalysisFields;
