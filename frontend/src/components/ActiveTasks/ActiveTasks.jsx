import React from 'react';
import './ActiveTasks.css';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';
import { connect } from 'react-redux';
import moment from 'moment';
import { switchStatusTask } from '../../redux/actions';
import saveMethodicFetch from '../../utils/saveMethodicFetch';

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

const filterTasks = (tasks, nowDate) => {
  const newTasks = tasks.filter((task) => {
    const { dateActivation, finishTaskDate, status } = task;
    return ((!dateActivation && status === 'missing') || (dateActivation
      && new Date(finishTaskDate) > nowDate
      && moment(dateActivation).format('D') === moment(nowDate).format('D')
      && status === 'missing'));
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
          const filteredTasks = filterTasks(tasks, nowDate);
          return (
            <ListGroup key={_id}>
              {
                filteredTasks.map((task, index) => {
                  const {
                    massage, dateActivation, idTask, status,
                  } = task;
                  return (
                    <ListGroupItem key={massage + dateActivation} className="task">
                      <div className="text-area">
                        <span className="taskName">{task.massage}</span>
                        {
                          dateActivation
                          && <span className="taskSpecialty"><strong>{moment(dateActivation).format('MMMM Do YYYY, HH:mm:ss')}</strong></span>
                        }
                        {' '}
                      </div>
                      <div className="btn-area">
                        <Button
                          outline
                          color="success"
                          onClick={() => updateStatusTask(methodics, _id, idTask, switchStatus, 'success')}
                        >
                          Готово
                        </Button>
                        <Button
                          outline
                          color="danger"
                          onClick={() => updateStatusTask(methodics, _id, idTask, switchStatus, 'deleted')}
                        >
                          Удалить
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

const mapStateToProps = (state) => {
  console.log(state.getInfo.methodics, 'STAAAAAAAAATE');

  return ({
    methodics: state.getInfo.methodics,
  });
};

const mapDispatchToProps = (dispatch) => ({
  switchStatus: (methodics) => dispatch(switchStatusTask(methodics)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ActiveTasks);
