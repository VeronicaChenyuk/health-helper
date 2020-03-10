import React, { useState } from 'react';
import './PatientAccount.css';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import { connect } from 'react-redux';
import { isPatientData } from '../../redux/actions';
import { storage } from '../../firebase';


const PatientAccount = (props) => {

  const [image, setImage] = useState(null);
  const [url, setUrl] = useState('');

  const handleChange = (e) => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      setImage(image);
    }
  };

  const { patientName, diseases } = props.patientData;


  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on('state_changed',
      (snapshot) => {
        console.log(snapshot)
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage.ref('images').child(image.name).getDownloadURL().then(url => {
          setUrl(url)
          console.log(url);
        })
      });
  }


  const formHandler = async (e) => {

    e.preventDefault();

    const name = e.target.name.value;
    const disease = e.target.disease.value;
    const { userName } = props;


    const response = await fetch(e.target.action, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        name,
        disease,
        userName,
      }),
    });

    const result = await response.json();

    if (result.user) {
      props.isPatientData(result.user);
    }
  };

  return (
    <div className="PatientAccount">
      {!!url.length ?
        <div>
          <h1>Привет, {patientName}</h1>
          <p>Твои хронические заболевания:</p>
          <p>{diseases}</p>
          <img src={url} />
        </div>
        :
        <Form action="http://localhost:5000/upload" onSubmit={formHandler}>
          <FormGroup>
            <Label for="exampleEmail">ФИО</Label>
            <Input type="text" name="name" placeholder="ФИО" />
          </FormGroup>
          <FormGroup>
            <Label for="exampleText">Укажите хронические заболевания</Label>
            <Input type="textarea" name="disease" />
          </FormGroup>
          <FormGroup>
            <Label for="exampleFile">File</Label>
            <Input type="file" name="photo" onChange={handleChange} />
          </FormGroup>
          <Button type="submit" onClick={handleUpload} style={{ background: '#00887A' }}>Отправить</Button>
        </Form>
      }

    </div>
  );
}



const mapStateToProps = (state) => ({
  userName: state.logIn.userName,
  patientData: state.patientDataReducer.isPatientData,
});

const mapDispatchToProps = (dispatch) => ({
  isPatientData: (patient) => dispatch(isPatientData(patient)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PatientAccount);
