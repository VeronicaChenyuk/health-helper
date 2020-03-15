import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import './DoctorList.css';
import { getMethodicsUser } from '../../redux/actions';

function DoctorList(props) {
  const myDoctors = props.methodics
    .filter((methodic) => methodic.doctorEmail !== undefined);
  const { changeDoctorInfo } = props;

  const deleteHandler = (id) => {
    const newDoctors = myDoctors.filter((doctor) => doctor._id != id);
    changeDoctorInfo(newDoctors);
  };

  const feedbackHandler = () => {
    alert('Отправка сообщения');
  };


  const doctorsList = myDoctors.map((doctor, index) => (
    <p key={doctor._id}>
      <strong>
        {index + 1}
        {'. '}
      </strong>
      {doctor.doctorName}
      <p />
      { doctor.photo ? <img src={doctor.photo} alt="doctor" /> : 'Фото не загружено'}
      <p className="speciality">
        Cпециальность:
        {' '}

        {doctor.specialist}
      </p>
      <p>
        <Button outline className="ready" onClick={feedbackHandler}>Связаться</Button>
        <Button outline className="dontwant" onClick={() => deleteHandler(doctor._id)}>Удалить</Button>
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

const mapDispatchToProps = (dispatch) => ({
  changeDoctorInfo: (methodics) => dispatch(getMethodicsUser(methodics)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DoctorList);
