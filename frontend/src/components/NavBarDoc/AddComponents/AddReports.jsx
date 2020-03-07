import React, { useState } from 'react';
import {
  Col, Row, FormGroup, Label, Input,
} from 'reactstrap';


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
              <Label check>
                <Input type="radio" name="radio2" />
                Ведение дневника лечения
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio2" />
                Необходимо отмечать все побочные действия
              </Label>
            </FormGroup>
          </Col>
          <Col sm={6}>
            <FormGroup check disabled>
              <Label check>
                <Input type="radio" name="radio2" disabled />
                Фотоотчет по результатам лечения
              </Label>
            </FormGroup>
            <FormGroup check disabled>
              <Label check>
                <Input type="radio" name="radio2" disabled />
                Фотоотчет по результатам лечения
              </Label>
            </FormGroup>
          </Col>
        </Row>
      </FormGroup>
    </>
  );
};

export default AddReports;
