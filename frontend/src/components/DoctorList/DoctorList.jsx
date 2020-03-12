import React, { useState } from 'react';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import './DoctorList.css';

function DoctorList(props) {

  const myDoctors = props.methodics
    .filter((methodic) => methodic.doctorEmail !== undefined);

  const [doctors, setDoctorsData] = useState(myDoctors)

  const deleteHandler = (id) => {
    const newDoctors = doctors.filter(doctor => {
      return doctor._id != id;
    });

    setDoctorsData(newDoctors);
  };

  const feedbackHandler = () => {
    alert('Отправка сообщения');
  }

  const doctorsList = doctors.map((doctor, index) => (
    <p key={doctor._id}>
      <strong>
        {index + 1}
        {'. '}
      </strong>
      {doctor.doctorName}
      <p />
      <img src={doctor.photo} alt="doctor" />
      <p className="speciality">
        Cпециальность: {''}
        {doctor.specialist}
      </p>
      <p>
        <Button outline className='ready' onClick={feedbackHandler}>Связаться</Button>
        <Button outline className='dontwant' onClick={() => deleteHandler(doctor._id)}>Удалить</Button>
      </p>
    </p>
  ));

  return (
    <>
      <div>
        {doctorsList}
      </div>
    </>
  );
}
const mapStateToProps = (state) => ({
  methodics: state.getInfo.methodics,
});
export default connect(
  mapStateToProps,
)(DoctorList);
