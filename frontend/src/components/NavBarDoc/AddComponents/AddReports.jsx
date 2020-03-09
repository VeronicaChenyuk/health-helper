import React, { useState } from 'react';
import {
  Col, Row, FormGroup, Label, Input,
} from 'reactstrap';
import { Field, reduxForm } from 'redux-form';


const AddReports = (props) => {
  const {
    buttonLabel,
    className,
  } = props;

  const [modal, setModal] = useState(false);

  return (
    <>
      <FormGroup style={{ inline: true }}>
        <legend>Необходимая отчетность от пациента</legend>
        <Row form>
          <Col sm={6}>
            <FormGroup check>
              <Field type="checkbox" name="needDiary" id="needDiary" component="input" />
              <Label style={{ marginLeft: '5px' }} check>   Необходимо ведение дневника лечения </Label>
            </FormGroup>
            <FormGroup check>
              <Field type="checkbox" name="needCheckConditions" id="needCheckConditions" component="input" />
              <Label style={{ marginLeft: '5px' }} check>   Необходимо отмечать все побочные действия </Label>
            </FormGroup>
          </Col>
          <Col sm={6}>
            <FormGroup check disabled>
              <Field type="checkbox" name="needPhoto" id="needPhoto" component="input" />
              <Label style={{ marginLeft: '5px' }} check> Фотоотчет по результатам лечения </Label>
            </FormGroup>
          </Col>
        </Row>
      </FormGroup>
    </>
  );
};

export default AddReports;
