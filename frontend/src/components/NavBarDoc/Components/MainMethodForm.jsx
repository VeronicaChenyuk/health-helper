import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {
  Button, Form, FormGroup, Label, Input,
} from 'reactstrap';
import store from '../../../redux/store';

import Drugs from './Drugs';
import Theraphy from './Theraphies';
import Analysis from './AddAnalysis';
import AddReports from '../AddComponents/AddReports';
import NextVisitFields from '../AddComponents/AddNextVisit';


function saveClick() {
  // this.setState({ drugsCount: this.state.drugsCount - 1 });
  const { values } = store.getState().form.method;
  const {
    email,
  } = values;
  const nameOfDrug = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const key in values) {
    if (key.match(/^nameOfDrug/)) {
      nameOfDrug.push(values[key]);
    }
  }
  console.log('DRUUUG', nameOfDrug);
  console.log(values);
}

const MainMethodForm = () => (
  <>
    <Form id="NewPatient">
      <FormGroup>
        <Label for="exampleEmail"> Электронная почта пациента   </Label>
        <Field
          style={{
            marginLeft: '30px', width: '350px', borderRadius: '5px', height: '35px',
          }}
          type="email"
          name="email"
          id="exampleEmail"
          placeholder="example@example.com"
          component="input"
        />
      </FormGroup>

      <Label for="exampleSelect"> Назначение лекарств </Label>
      <Drugs />
      <br />

      <Label for="exampleSelect">Назначение Терапии</Label>
      <Theraphy />
      <br />

      <Label for="exampleSelect">Назначение Анализов</Label>
      <Analysis />
      <br />

      <FormGroup>
        <Label for="exampleText">Comments</Label>
        <br />
        <Field style={{ width: '550px', borderRadius: '5px', height: '85px' }} type="text" name="comments" id="exampleEmail" placeholder="Дополнения" component="textarea" />
      </FormGroup>

      <AddReports />
      <NextVisitFields />
      <Button color="primary" onClick={() => saveClick()}>Save</Button>
    </Form>
  </>
);

const MethodForm = reduxForm({
  form: 'method',
})(MainMethodForm);

export default MethodForm;
