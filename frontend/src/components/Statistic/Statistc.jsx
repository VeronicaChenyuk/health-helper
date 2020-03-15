import React from 'react';
import './Statistic.css';
import { connect } from 'react-redux';
import { isLoginForm } from '../../redux/actions';

const getCurrentTasks = (emailPation, methodics) => {
  const currentTasks = methodics.filter((methodic) => methodic.patientEmail === emailPation)
    .map((methodic) => methodic.tasks);
  return currentTasks[0];
};

const Statistic = (props) => {
  const { emailPatient, methodics } = props;

  const currentTasks = getCurrentTasks(emailPatient, methodics);

  let allTasks;
  let successTasks;
  let deleteTasks;
  let defaultTasks;
  let missingTasks;
  let percentSuccess;
  let notSuccess;
  let progress;

  if (currentTasks) {
    allTasks = currentTasks.length;
    successTasks = currentTasks.filter((task) => task.status === 'success').length;
    deleteTasks = currentTasks.filter((task) => task.status === 'deleted').length;
    defaultTasks = currentTasks.filter((task) => task.status === 'default').length;
    missingTasks = currentTasks.filter((task) => task.status === 'missing').length;
    percentSuccess = (successTasks / (allTasks - defaultTasks)) * 100;
    percentSuccess = Number.isNaN(percentSuccess) ? 0 : Math.floor(percentSuccess);
    notSuccess = deleteTasks + missingTasks;
    progress = ((allTasks - defaultTasks) / allTasks) * 100;
    progress = Number.isNaN(progress) ? 0 : Math.floor(progress);
  }

  return (
    <>
      <div className="statistic-circles">
        <div className="group-circles">
          <div className="one-row">
            <div className="group-circle-item one-item">
              <div className="circle circle-one" />
              <div className="circle-description">
                <span className="circle-numbers">{allTasks}</span>
                <span className="circle-concept">Все задачи</span>
              </div>
            </div>
            <div className="group-circle-item two-item">
              <div className="circle circle-two" />
              <div className="circle-description">
                <span className="circle-numbers">{successTasks}</span>
                <span className="circle-concept">Выполненные задачи</span>
              </div>
            </div>
            <div className="group-circle-item three-item">
              <div className="circle circle-three" />
              <div className="circle-description">
                <span className="circle-numbers">{notSuccess}</span>
                <span className="circle-concept">Невыполненные задачи</span>
              </div>
            </div>
          </div>
          <div className="two-row">
            <div className="group-circle-item four-item">
              <div className="circle circle-four" />
              <div className="circle-description">
                <span className="circle-numbers">
                  {percentSuccess}
                  %
                </span>
                <span className="circle-concept">Успешность выполнения курса</span>
              </div>
            </div>
            <div className="group-circle-item five-item">
              <div className="circle circle-five" />
              <div className="circle-description">
                <span className="circle-numbers">
                  {progress}
                  %
                </span>
                <span className="circle-concept">Прогресс курса</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  isRegForm: state.switchFormReducer.isRegForm,
  emailPatient: state.switchFormReducer.currentPatientEmail,
  methodics: state.getInfo.methodics,
});

const mapDispatchToProps = (dispatch) => ({
  isLoginForm: () => dispatch(isLoginForm()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Statistic);
