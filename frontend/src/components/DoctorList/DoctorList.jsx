import React from 'react';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';

function DoctorList(props) {
  const myDoctors = props.methodics
    .filter((methodic) => methodic.doctorEmail !== undefined);

  return (
    <>
      <div>
        {
          myDoctors.map((doctor, index) => (
            <p key={doctor.doctorName}>
              <strong>
                {index + 1}
                {'. '}
              </strong>
              {doctor.doctorName}
              <p />
              Cпециальность:
              {doctor.specialist}
              <p>
                <Button outline color="success">Связаться</Button>
                <Button outline color="danger">Удалить</Button>
              </p>
            </p>
          ))
        }
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
