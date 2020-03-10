import React, { useEffect } from 'react';
import { Col, Row, FormGroup } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

function ChangedDrug(idx, props) {
  console.log('AAAAAAAA', props);
  return (

    <>
      <FormGroup>
        <Row form>
          <Col md={2}>
            <Field
              style={{ maxWidth: '250px', borderRadius: '5px', height: '35px' }}
              type="text"
              name="nameOfDrug"
              id="drug"
              placeholder="Лекарство"
              component="input"
            />
          </Col>
          <Col md={2}>
            <Field
              style={{ maxWidth: '250px', borderRadius: '5px', height: '35px' }}
              type="text"
              name={`dosage_${idx}`}
              id="dosage"
              placeholder="Дозировка"
              component="input"
            />
          </Col>
          <Col md={2}>
            <Field style={{ maxWidth: '250px', borderRadius: '5px', height: '35px' }} type="text" name={`frequency_${idx}`} id="frequency" placeholder="Частота применения" component="input" />
          </Col>
          <Col md={2}>
            <Field style={{ maxWidth: '250px', borderRadius: '5px', height: '35px' }} type="text" name={`beforeAfterEat_${idx}`} id="beforeAfterEat" placeholder="до или после еды" component="input" />
          </Col>
          <Col md={2}>
            <Field style={{ maxWidth: '250px', borderRadius: '5px', height: '35px' }} type="text" name={`duration_${idx}`} id="duration" placeholder="Длительность курса" component="input" />
          </Col>
          <Col md={2} />
        </Row>
      </FormGroup>
    </>
  );
}

const ChangedDrugsFields = reduxForm({
  form: 'method',
})(ChangedDrug);

const mapStateToProps = (state) => ({
  email: state.logIn.user.email,
  methodics: state.getInfo.methodics,
  // initialValues: state.getInfo.,
  currentPatientEmail: state.switchFormReducer.currentPatientEmail,
});


export default connect(mapStateToProps)(ChangedDrugsFields);
