/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {
  Button, Form, FormGroup, Label,
} from 'reactstrap';
import { connect } from 'react-redux';
import store from '../../../redux/store';

import Drugs from './Drugs';
import Theraphy from './Theraphies';
import Analysis from './AddAnalysis';
import AddReports from '../AddComponents/AddReports';
import NextVisitFields from '../AddComponents/AddNextVisit';

async function saveClick(props) {
  try {
    const { values } = store.getState().form.method;
    const nameOfDrug = [];
    const dosage = [];
    const frequency = [];
    const duration = [];
    const beforeAfterEat = [];
    const frequencyOfTheraphy = [];
    const nameOfTheraphy = [];
    const durationOfTheraphy = [];
    const nameOfAnalysis = [];
    const drugs = [];
    const theraphies = [];
    const patientReports = [];

    for (const key in values) {
      if (key.match(/^nameOfDrug/)) {
        nameOfDrug.push(values[key]);
      }
      if (key.match(/^dosage/)) {
        dosage.push(values[key]);
      }
      if (key.match(/^frequency_/)) {
        frequency.push(values[key]);
      }
      if (key.match(/^beforeAfterEat/)) {
        beforeAfterEat.push(values[key]);
      }
      if (key.match(/^duration_/)) {
        duration.push(values[key]);
      }
      if (key.match(/^nameOfTheraphy/)) {
        nameOfTheraphy.push(values[key]);
      }
      if (key.match(/^frequencyOfTheraphy/)) {
        frequencyOfTheraphy.push(values[key]);
      }
      if (key.match(/^durationOfTheraphy/)) {
        durationOfTheraphy.push(values[key]);
      }
      if (key.match(/^nameOfAnalysis/)) {
        nameOfAnalysis.push(values[key]);
      }
    }

    for (let i = 0; i < nameOfDrug.length; i += 1) {
      drugs[i] = {
        nameOfDrug: nameOfDrug[i],
        dosage: dosage[i],
        frequency: frequency[i],
        beforeAfterEat: beforeAfterEat[i],
        duration: duration[i],
      };
    }
    for (let i = 0; i < nameOfTheraphy.length; i += 1) {
      theraphies[i] = {
        nameOfTheraphy: nameOfTheraphy[i],
        frequency: frequencyOfTheraphy[i],
        duration: durationOfTheraphy[i],
      };
    }
    if (values !== undefined) {
      if (values.needCheckConditions !== undefined) patientReports.push('Doctor needs conditions report');
      if (values.needDiary !== undefined) patientReports.push('Doctor needs diary report');
      if (values.needPhoto !== undefined) patientReports.push('Doctor needs Photo report');
    }
    const date = new Date();
    const methodic = {
      patientName: values.patientName,
      patientEmail: values.email,
      doctorEmail: props.email,
      drugs,
      theraphies,
      analisis: nameOfAnalysis,
      comment: values.comments,
      patientReports,
      nextVisit: values.nextVisit,
      dateOfTheLastVisit: date,
    };
    console.log('Methodic', methodic);
    await fetch('http://localhost:5000/savemethodic', {
      method: 'POST',
      headers:
      {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        methodic,
      }),
    });
  } catch (e) {
    alert('Something went Wrong!');
  }
}


const MainMethodForm = (props) => (
  <>
    <Form id="NewPatient">
      <FormGroup>
        <Label for="exampleText">Имя пользователя</Label>
        <Field
          style={{
            marginLeft: '25px', width: '350px', borderRadius: '5px', height: '35px',
          }}
          type="text"
          name="patientName"
          id="patientName"
          placeholder="ФИО"
          component="input"
        />
      </FormGroup>

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
        <Label for="exampleText">Комментарий</Label>
        <br />
        <Field style={{ width: '550px', borderRadius: '5px', height: '85px' }} type="text" name="comments" id="exampleEmail" placeholder="Дополнения" component="textarea" />
      </FormGroup>

      <AddReports />
      <NextVisitFields />
      <Button color="primary" onClick={() => saveClick(props)}>Сохранить</Button>
    </Form>
  </>
);

const mapStateToProps = (state) => ({
  email: state.logIn.user.email,
});

const MethodForm = reduxForm({
  form: 'method',
})(MainMethodForm);

// export default MethodForm;
export default connect(mapStateToProps)(MethodForm);
