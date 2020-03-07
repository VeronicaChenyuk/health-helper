import React from 'react';
import {
  Button, Form, FormGroup, Label, Input, FormText,
} from 'reactstrap';
import { Link } from 'react-router-dom';

const DoctorPage = (props) =>
// async handelLoad(){
  //   const response = await fetch('http://localhost:5000/upload/');
  //   const json = await response.json();
  // }
  (
    <div>
      <Form method="POST" action="http://localhost:5000/personal/doctor">
        <FormGroup>
          <Label for="doctorName">Имя Отчество Фамилия</Label>
          <Input type="doctorName" name="doctorName" id="doctorName" placeholder="Введите ваше Имя Отчество Фамилию" />
        </FormGroup>
        <FormGroup>
          <Label for="specialist">Специальность</Label>
          <Input type="specialist" name="specialist" id="specialist" placeholder="Введите вашу специальность" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleFile">Файл</Label>
          <Input type="file" name="file" id="exampleFile" />
          <FormText color="muted" />
        </FormGroup>
        <Link to="/"><Button type="submit">Изменить</Button></Link>

      </Form>
    </div>
  );


export default DoctorPage;
