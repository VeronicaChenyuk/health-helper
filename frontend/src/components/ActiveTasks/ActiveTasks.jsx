import React from 'react';
import './ActiveTasks.css';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';
import { connect } from 'react-redux';

const ActiveTasks = (props) => {
  console.log(props.methodics, '<<<<<<<<<<<<<<<<<<<<<<<<<<');
  const { methodics } = props;
  /* nameOfTheraphy: "массаж ключицы"
frequency: "2 раза в неделю "
duration: "10 дней" */

  // const drugsOfTodos = drugs.map((drug, index) => (
  //   <ListGroupItem key={index.toString()} className="task">
  //     <div className="text-area">
  //       <span className="taskName">{drug.nameOfDrug}</span>
  //       <span className="taskSpecialty"><strong>{drug.dosage}</strong></span>
  //       <span className="taskSpecialty"><strong>{drug.beforeAfterEat}</strong></span>
  //       <span className="taskSpecialty"><strong>{drug.duration}</strong></span>
  //     </div>
  //     <div className="btn-area">
  //       <Button outline color="success">Готово</Button>
  //       <Button outline color="danger">Удалить</Button>
  //       <Button outline color="info">Отложить</Button>
  //     </div>
  //   </ListGroupItem>
  // ));

  return (
    <div className="ActiveTasks">
      {
      methodics.map((methodic) => {
        const { drugs, theraphies, analisis, _id } = methodic;
        return (
          <ListGroup key={_id}>
            {
              drugs.map((drug) => (
                <ListGroupItem key={drug.nameOfDrug} className="task">
                  <div className="text-area">
                    <span className="taskName">{drug.nameOfDrug}</span>
                    <span className="taskSpecialty"><strong>{drug.dosage}</strong></span>
                    {' '}
                    <span className="taskSpecialty"><strong>{drug.beforeAfterEat}</strong></span>
                    {' - '}
                    <span className="taskSpecialty"><strong>{drug.duration}</strong></span>
                  </div>
                  <div className="btn-area">
                    <Button outline color="success">Готово</Button>
                    <Button outline color="danger">Удалить</Button>
                    <Button outline color="info">Отложить</Button>
                  </div>
                </ListGroupItem>
              ))
            }
            {
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
