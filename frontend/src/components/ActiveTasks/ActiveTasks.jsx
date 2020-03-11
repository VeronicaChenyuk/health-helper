import React from 'react';
import './ActiveTasks.css';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';
import { connect } from 'react-redux';
import moment from 'moment';

const ActiveTasks = (props) => {
  const { methodics } = props;
  const nowDate = moment().format();
  const testDate = new Date(nowDate);
  // const ex = methodics[2].tasks[0].dateActivation;
  // console.log(ex, nowDate, testDate, '<<<<<<<<<<<<<<<<<<<<<<<<<<<<< DATE');

  return (
    <div className="ActiveTasks">
      {
      methodics.map((methodic) => {
        const {
          drugs, theraphies, analisis, _id, tasks,
        } = methodic;
        return (
          <ListGroup key={_id}>
            {
              tasks.map((task) => (
                <ListGroupItem key={task.massage} className="task">
                  <div className="text-area">
                    <span className="taskName">{task.massage}</span>
                    <span className="taskSpecialty"><strong>{task.dateActivation}</strong></span>
                    {' '}
                    {/* <span className="taskSpecialty"><strong>{task.beforeAfterEat}</strong></span>
                    {' - '}
                    <span className="taskSpecialty"><strong>{task.duration}</strong></span> */}
                  </div>
                  <div className="btn-area">
                    <Button outline color="success">Готово</Button>
                    <Button outline color="danger">Удалить</Button>
                  </div>
                </ListGroupItem>
              ))
            }
            {/* {
              theraphies.map((theraphy) => (
                <ListGroupItem key={theraphy.nameOfTheraphy} className="task">
                  <div className="text-area">
                    <span className="taskName">{theraphy.nameOfTheraphy}</span>
                    <span className="taskSpecialty"><strong>{theraphy.frequency}</strong></span>
                    {' - '}
                    <span className="taskSpecialty"><strong>{theraphy.duration}</strong></span>
                  </div>
                  <div className="btn-area">
                    <Button outline color="success">Готово</Button>
                    <Button outline color="danger">Удалить</Button>
                    <Button outline color="info">Отложить</Button>
                  </div>
                </ListGroupItem>
              ))
            } */}
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
