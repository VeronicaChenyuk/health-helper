/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import React, { useEffect } from 'react';
import { Field, reduxForm } from 'redux-form';
import {
  Button, Form, FormGroup, Label,
} from 'reactstrap';
import { connect } from 'react-redux';
import store from '../../../redux/store';

import ChangingDrugs from './ChangingDrugs';
import Theraphy from './Theraphies';
import Analysis from './AddAnalysis';
import AddReports from '../AddComponents/AddReports';
import NextVisitFields from '../AddComponents/AddNextVisit';

async function saveClick(props) {

  // try {
  //   const { values } = store.getState().form.method;
  //   const nameOfDrug = [];
  //   const dosage = [];
  //   const frequency = [];
  //   const duration = [];
  //   const beforeAfterEat = [];
  //   const frequencyOfTheraphy = [];
  //   const nameOfTheraphy = [];
  //   const durationOfTheraphy = [];
  //   const nameOfAnalysis = [];
  //   const drugs = [];
  //   const theraphies = [];
  //   const patientReports = [];

  //   for (const key in values) {
  //     if (key.match(/^nameOfDrug/)) {
  //       nameOfDrug.push(values[key]);
  //     }
  //     if (key.match(/^dosage/)) {
  //       dosage.push(values[key]);
  //     }
  //     if (key.match(/^frequency_/)) {
  //       frequency.push(values[key]);
  //     }
  //     if (key.match(/^beforeAfterEat/)) {
  //       beforeAfterEat.push(values[key]);
  //     }
  //     if (key.match(/^duration_/)) {
  //       duration.push(values[key]);
  //     }
  //     if (key.match(/^nameOfTheraphy/)) {
  //       nameOfTheraphy.push(values[key]);
  //     }
  //     if (key.match(/^frequencyOfTheraphy/)) {
  //       frequencyOfTheraphy.push(values[key]);
  //     }
  //     if (key.match(/^durationOfTheraphy/)) {
  //       durationOfTheraphy.push(values[key]);
  //     }
  //     if (key.match(/^nameOfAnalysis/)) {
  //       nameOfAnalysis.push(values[key]);
  //     }
  //   }

  //   for (let i = 0; i < nameOfDrug.length; i += 1) {
  //     drugs[i] = {
  //       nameOfDrug: nameOfDrug[i],
  //       dosage: dosage[i],
  //       frequency: frequency[i],
  //       beforeAfterEat: beforeAfterEat[i],
  //       duration: duration[i],
  //     };
  //   }
  //   for (let i = 0; i < nameOfTheraphy.length; i += 1) {
  //     theraphies[i] = {
  //       nameOfTheraphy: nameOfTheraphy[i],
  //       frequency: frequencyOfTheraphy[i],
  //       duration: durationOfTheraphy[i],
  //     };
  //   }
  //   if (values !== undefined) {
  //     if (values.needCheckConditions !== undefined) patientReports.push('Doctor needs conditions report');
  //     if (values.needDiary !== undefined) patientReports.push('Doctor needs diary report');
  //     if (values.needPhoto !== undefined) patientReports.push('Doctor needs Photo report');
  //   }
  //   const date = new Date();
  //   console.log('PROOOOPS', props);
  //   let speciality;
  //   if (props.specialist !== undefined) {
  //     speciality = props.specialist;
  //   } else {
  //     speciality = 'Врач общей практики';
  //   }

  //   const methodic = {
  //     patientName: values.patientName,
  //     patientEmail: values.email,
  //     doctorEmail: props.email.email,
  //     doctorFullName: props.email.login,
  //     doctorSpeciality: speciality,
  //     drugs,
  //     theraphies,
  //     analisis: nameOfAnalysis,
  //     comment: values.comments,
  //     patientReports,
  //     nextVisit: values.nextVisit,
  //     dateOfTheLastVisit: date,
  //   };
  //   console.log('Methodic', methodic);
  //   await fetch('http://localhost:5000/savemethodic', {
  //     method: 'POST',
  //     headers:
  //     {
  //       'Content-type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       methodic,
  //     }),
  //   });
  // } catch (e) {
  //   alert('Something went Wrong!');
  // }
}
function indexMethod(email, methodics) {
  for (let i = 0; i < methodics.length; i++) {
    if (methodics[i].patientEmail === email) { return i; }
  }
}


function MainMethodFormChange(props) {
  // const index = props.methodics.indexOf(props.currentPatientEmail);
  // console.log(index);



  // const currentPatient = props.currentPatientEmail;
  // const methodic = props.methodics.filter((method) => method.patientEmail === currentPatient);
  // console.log('MEEEEEEETH!', methodic[0]);

  return (
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
            name="patientEmail"
            id="exampleEmail"
            placeholder="example@example.com"
            component="input"
          />
        </FormGroup>

        <Label for="exampleSelect"> Назначение лекарств </Label>
        <ChangingDrugs />
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
          <Field
            style={{
              width: '550px',
              borderRadius: '5px',
              height: '85px',
            }}
            type="text"
            name="comments"
            id="exampleEmail"
            placeholder="Дополнения"
            component="textarea"
          />
        </FormGroup>

        <AddReports />
        <NextVisitFields />
        <Button color="primary" onClick={() => saveClick(props)}>Сохранить</Button>
      </Form>
    </>
  );
}

const mapStateToProps = (state) => ({
  email: state.logIn.user.email,
  methodics: state.getInfo.methodics,
  initialValues: state.getInfo.methodics[indexMethod(state.switchFormReducer.currentPatientEmail, state.getInfo.methodics)],
  currentPatientEmail: state.switchFormReducer.currentPatientEmail,
});

const MethodFormChange = reduxForm({
  form: 'method',
})(MainMethodFormChange);

// export default MethodForm;
export default connect(mapStateToProps)(MethodFormChange);
