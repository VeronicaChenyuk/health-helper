import React from 'react';
import {
  Button, Form, FormGroup, Label, Input, FormText,
} from 'reactstrap';
import { connect } from 'react-redux';
import changeInfoUser from '../../redux/actions';

const loadHandler = async (e, props) => {
  console.log(props, 'WTFFFF');
  e.preventDefault();

  const doctorName = e.target.doctorName.value;
  const specialist = e.target.specialist.value;
  const { email } = props.user;
  const changeInfo = props.changeInfoUser;
  const response = await fetch(e.target.action, {
    method: 'POST',
    headers:
    {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      doctorName,
      specialist,
      email,
    }),
  });
  const result = await response.json();
  const user = result.newUser;
  changeInfo(user);
  console.log(user, 'REEEEEESULT');
  return true;
};

const DoctorPage = (props) => (
  <div>
    <Form method="POST" action="http://localhost:5000/personal/doctor" onSubmit={(e) => loadHandler(e, props)}>
      <FormGroup>
        <Label for="doctorName">Имя Отчество Фамилия</Label>
        <Input type="doctorName" name="doctorName" id="doctorName" placeholder="{doctorName}" />
      </FormGroup>
      <FormGroup>
        <Label for="specialist">Специальность</Label>
        <Input type="specialist" name="specialist" id="specialist" placeholder="{specialistM}" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleFile">Файл</Label>
        <Input type="file" name="file" id="exampleFile" />
        <FormText color="muted" />
      </FormGroup>
      <Button type="submit">Изменить</Button>
    </Form>
  </div>
);
const mapStateToProps = (state) => ({
  user: state.logIn.user,
});

const mapDispathToProps = (dispatch) => ({
  changeInfoUser: (user) => dispatch(changeInfoUser(user)),
});

export default connect(
  mapStateToProps,
  mapDispathToProps,
)(DoctorPage);
