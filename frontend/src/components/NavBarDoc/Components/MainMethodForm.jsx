import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {
  Button, Form, FormGroup, Label, Input,
} from 'reactstrap';

import Drugs from './Drugs';
import Theraphy from './AddTheraphy';
import Analysis from './AddAnalysis';
import AddReports from '../AddComponents/AddReports';
import AddNextVisit from '../AddComponents/AddNextVisit';

const MainMethodForm = () => (
  <>
    <Form id="NewPatient">
      <FormGroup>
        <Label for="exampleEmail">Электронная почта пациента</Label>
        <Field type="email" name="email" id="exampleEmail" placeholder="example@example.com" component="input" />
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
        <Input type="textarea" name="text" id="exampleText" />
      </FormGroup>

      <AddReports />
      <AddNextVisit />

      <FormGroup>
        <Label for="exampleFile">Загрузка необходимых файлов</Label>
        <Input type="file" name="file" id="exampleFile" />
      </FormGroup>
      <Button color="primary" onClick={() => alert('hello')}>Save</Button>
    </Form>
  </>
);

const MethodForm = reduxForm({
  // a unique name for the form
  form: 'method',
})(MainMethodForm);

export default MethodForm;
