import React from 'react';
import './Statistic.css';
import { connect } from 'react-redux';
import { isLoginForm } from '../../redux/actions';

const getCurrentTasks = (emailPation, methodics) => {
  const currentTasks = methodics.filter((methodic) => methodic.patientEmail === emailPation)
    .map((methodic) => methodic.tasks);
    console.log(currentTasks[0]);
    return currentTasks[0];
};

const Statistic = (props) => {
  const { emailPation, methodics } = props;
  const currentTasks = getCurrentTasks(emailPation, methodics);
  const allTasks = currentTasks.length;
  const successTasks = currentTasks.filter((task) => task.status === 'success');

  return (
    <>
      <div className="statistic-circles">
        <div className="group-circles">
          <div className="group-circle-item">
            <div className="circle circle-one" />
            <div className="circle-description">
              <span className="circle-numbers">3,150</span>
              <span className="circle-concept">applicants</span>
            </div>
          </div>
          <div className="group-circle-item">
            <div className="circle circle-two" />
            <div className="circle-description">
              <span className="circle-numbers">1,546</span>
              <span className="circle-concept">interviews</span>
            </div>
          </div>
          <div className="group-circle-item">
            <div className="circle circle-three" />
            <div className="circle-description">
              <span className="circle-numbers">912</span>
              <span className="circle-concept">fordwards</span>
            </div>
          </div>
        </div>
        <h3 className="rounded">
          <span className="totals-concept">totals</span>
          <span className="totals-results">Out of 5,231 views</span>
        </h3>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  isRegForm: state.switchFormReducer.isRegForm,
  emailPation: state.switchFormReducer.currentPatientEmail,
  methodics: state.getInfo.methodics,
});

const mapDispatchToProps = (dispatch) => ({
  isLoginForm: () => dispatch(isLoginForm()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Statistic);
