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
  const successTasks = currentTasks.filter((task) => task.status === 'success').length;
  const deleteTasks = currentTasks.filter((task) => task.status === 'deleted').length;
  const defaultTasks = currentTasks.filter((task) => task.status === 'default').length;
  const missingTasks = currentTasks.filter((task) => task.status === 'missing').length;
  let percentSuccess = (successTasks / (allTasks - defaultTasks)) * 100;
  percentSuccess = Number.isNaN(percentSuccess) ? 0 : percentSuccess;
  const notSuccess = deleteTasks + missingTasks;
  let progress = ((allTasks - defaultTasks) / allTasks) * 100;
  progress = Number.isNaN(progress) ? 0 : progress;

  console.log(allTasks, defaultTasks, successTasks, deleteTasks, missingTasks);

  return (
    <>
      <div className="statistic-circles">
        <div className="group-circles">
          <div className="group-circle-item">
            <div className="circle circle-one" />
            <div className="circle-description">
              <span className="circle-numbers">{allTasks}</span>
              <span className="circle-concept">Все задачи</span>
            </div>
          </div>
          <div className="group-circle-item">
            <div className="circle circle-two" />
            <div className="circle-description">
              <span className="circle-numbers">{successTasks}</span>
              <span className="circle-concept">Выполненные задачи</span>
            </div>
          </div>
          <div className="group-circle-item">
            <div className="circle circle-three" />
            <div className="circle-description">
              <span className="circle-numbers">{notSuccess}</span>
              <span className="circle-concept">Невыполненные задачи</span>
            </div>
          </div>
          <div className="group-circle-item">
            <div className="circle circle-four" />
            <div className="circle-description">
              <span className="circle-numbers">{percentSuccess}%</span>
              <span className="circle-concept">Успешность выполнения курса</span>
            </div>
          </div>
          <div className="group-circle-item">
            <div className="circle circle-five" />
            <div className="circle-description">
              <span className="circle-numbers">{progress}%</span>
              <span className="circle-concept">Прогресс курса</span>
            </div>
          </div>
        </div>
        {/* <h3 className="rounded">
          <span className="totals-concept">totals</span>
          <span className="totals-results">Out of 5,231 views</span>
        </h3> */}
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
