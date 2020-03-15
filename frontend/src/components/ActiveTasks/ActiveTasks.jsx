import React from 'react';
import './ActiveTasks.css';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';
import { connect } from 'react-redux';
import moment from 'moment';
import { switchStatusTask } from '../../redux/actions';
import saveMethodicFetch from '../../utils/saveMethodicFetch';

moment.locale('ru');
const updateStatusTask = (methodics, _id, idTask, switchStatus, newStatus) => {
  const updatedMethodics = methodics.map((methodic) => {
    if (_id === methodic._id) {
      const { tasks } = methodic;
      tasks.map((task) => {
        if (idTask === task.idTask) {
          task.status = newStatus;
        }
        return task;
      });
      saveMethodicFetch(methodic);
    }
    return methodic;
  });
  return switchStatus(updatedMethodics);
};

const filterTasks = (tasks, nowDate, _id, switchStatus, methodics) => {
  const newTasks = tasks.filter((task) => {
    const {
      dateActivation, finishTaskDate, status, idTask,
    } = task;
    const isMissing = new Date(finishTaskDate) < nowDate;
    if (status !== 'missing' && isMissing) {
      updateStatusTask(methodics, _id, idTask, switchStatus, 'missing');
    }
    return ((!dateActivation && status === 'default') || (dateActivation
      && new Date(finishTaskDate) > nowDate
      && moment(dateActivation).format('D') === moment(nowDate).format('D')
      && status === 'default'));
  });
  return newTasks;
};

const ActiveTasks = (props) => {
  const { methodics, switchStatus } = props;
  const nowDate = new Date();

  return (
    <div className="ActiveTasks">
      {
        methodics.map((methodic) => {
          const {
            _id, tasks,
          } = methodic;
          const filteredTasks = filterTasks(tasks, nowDate, _id, switchStatus, methodics);
          return (
            <ListGroup key={_id}>
              {
                filteredTasks.map((task, index) => {
                  const {
                    massage, dateActivation, idTask,
                  } = task;
                  return (
                    <ListGroupItem key={massage + dateActivation} className="task">
                      <div className="text-area">
                        <span className="taskName">{task.massage}</span>
                        {
                          dateActivation
                          && <span className="taskSpecialty"><strong>{moment(dateActivation).format('HH:mm:ss, LL')}</strong></span>
                        }
                        {' '}
                      </div>
                      <div className="btn-area">
                        <Button
                          className="ready"
                          onClick={() => updateStatusTask(methodics, _id, idTask, switchStatus, 'success')}
                        >
                          Выполнено
                        </Button>
                        <Button
                          className="dontwant"
                          onClick={() => updateStatusTask(methodics, _id, idTask, switchStatus, 'deleted')}
                        >
                          Не выполнено
                        </Button>
                      </div>
                    </ListGroupItem>
                  );
                })
              }
            </ListGroup>
          );
        })
      }
    </div>
  );
};

const mapStateToProps = (state) => ({
  methodics: state.getInfo.methodics,
});

const mapDispatchToProps = (dispatch) => ({
  switchStatus: (methodics) => dispatch(switchStatusTask(methodics)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ActiveTasks);
