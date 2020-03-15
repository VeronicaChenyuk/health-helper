import React from 'react';
import {
  Col, Row, FormGroup, Label,
} from 'reactstrap';
import { Field } from 'redux-form';

const DrugsFields = ({ idx }) => (
  <>
    <FormGroup>
      <Row form>
        <Col md={2}>
          <Field
            style={{ maxWidth: '250px', borderRadius: '5px', height: '35px' }}
            type="text"
            name={`nameOfDrug_${idx}`}
            id="drug"
            placeholder="Название лекарства"
            component="input"
          />
        </Col>
        <Col md={2}>
          <Label for="exampleEmail"> Дозировка:   </Label>
          <Field
            style={{
              maxWidth: '40px', borderRadius: '5px', height: '35px', marginLeft: '7px',
            }}
            type="number"
            name={`dosage_${idx}`}
            id="dosage"
            component="input"
            placeholder="1"
          />
          <Label style={{ marginLeft: '7px' }} for="text"> мг   </Label>
        </Col>
        <Col md={3}>
          <Label for="exampleEmail"> Принимать   </Label>
          <Field
            style={{
              maxWidth: '40px', borderRadius: '5px', height: '35px', marginLeft: '7px',
            }}
            type="number"
            name={`frequency_${idx}`}
            id="frequency"
            placeholder="1"
            component="input"
          />
          <Label style={{ marginLeft: '7px' }} for="text"> раз(а) в день   </Label>
        </Col>
        <Col md={2}>
          <Field style={{ maxWidth: '95px', borderRadius: '5px', height: '35px' }} name={`beforeAfterEat_${idx}`} id="beforeAfterEat" placeholder="до/после" component="select" >
            <option>до</option>
            <option>после</option>
            <option>во время</option>
          </Field>
          <Label style={{ marginLeft: '7px' }} for="text"> еды </Label>
        </Col>
        <Col md={3}>
          <Label for="exampleEmail"> Длительность курса</Label>
          <Field
            style={{
              maxWidth: '40px', borderRadius: '5px', height: '35px', marginLeft: '7px',
            }}
            type="text"
            name={`duration_${idx}`}
            id="duration"
            placeholder="1"
            component="input"
          />
          <Label style={{ marginLeft: '7px' }} for="text"> суток </Label>
        </Col>
        <Col md={1} />
      </Row>
    </FormGroup>
  </>
);

export default DrugsFields;
