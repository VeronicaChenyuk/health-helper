import React from 'react';
import {
  Button, Form, FormGroup, Label, Input, FormText,
} from 'reactstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { changeInfoUser } from '../../redux/actions';
import './DoctorPage.css';

const loadHandler = async (e, props) => {
  e.preventDefault();

  const doctorName = e.target.doctorName.value;
  const specialist = e.target.specialist.value;
  const { email } = props.user;
  const { changeInfo } = props;
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
  return props.history.push('/');
};

const DoctorPage = (props) => {
  const { doctorName, specialist } = props.user;

  return (
    <div className="doctorPage">
      <Form method="POST" action="http://localhost:5000/personal/doctor" onSubmit={(e) => loadHandler(e, props)}>
        <FormGroup>
          <Label for="doctorName">Имя  Отчество  Фамилия</Label>
          <Input type="doctorName" name="doctorName" id="doctorName" placeholder="Введите Имя, Фамилию и Отчество" defaultValue={doctorName} />
        </FormGroup>
        <FormGroup>
          <Label for="specialist">Специальность</Label>
          <Input type="specialist" name="specialist" id="specialist" placeholder="Введите специальность" defaultValue={specialist} />
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
};
const mapStateToProps = (state) => ({
  user: state.logIn.user,
});

const mapDispathToProps = (dispatch) => ({
  changeInfo: (user) => dispatch(changeInfoUser(user)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispathToProps,
)(DoctorPage));
