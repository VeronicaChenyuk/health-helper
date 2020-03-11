import React from 'react';
import './ActiveTasks.css';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';
import { connect } from 'react-redux';
import moment from 'moment';

const isStatusDone = (event, id, index) => {
  console.log(event.target, id, index);
};

const filterTasks = (tasks, nowDate) => {
  const newTasks = tasks.filter((task) => {
    const { dateActivation, finishTaskDate } = task;
    return (!dateActivation || (dateActivation
          && new Date(finishTaskDate) > nowDate
          && moment(dateActivation).format('D') === moment(nowDate).format('D')));
  });
  return newTasks;
};

const ActiveTasks = (props) => {
  const { methodics } = props;
  const nowDate = new Date();

  return (
    <div className="ActiveTasks">
      {
      methodics.map((methodic) => {
        const {
          drugs, theraphies, analisis, _id, tasks,
        } = methodic;
        const filteredTasks = filterTasks(tasks, nowDate);
        return (
          <ListGroup key={_id}>
            {
              filteredTasks.map((task, index) => {
                const { massage, dateActivation } = task;
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
                      <Button outline color="success" onClick={(event) => isStatusDone(event, _id, index)}>Готово</Button>
                      <Button outline color="danger">Удалить</Button>
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

export default connect(
  mapStateToProps,
)(ActiveTasks);
