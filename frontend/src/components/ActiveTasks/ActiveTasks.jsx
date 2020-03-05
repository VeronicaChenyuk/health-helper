import React from 'react';
import './ActiveTasks.css';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';

const ActiveTasks = () => {

  const tasksInfo = [{ todo: 'Выпить таблетку', specialty: 'Невролгия' }, { todo: 'Поставить клизму', specialty: 'Проктолог' }, { todo: 'Сдать кровь', specialty: 'Терапевт' }];
  const listOfTodos = tasksInfo.map((task, index) => (
    <ListGroupItem key={index.toString()} className="task">
      <div className="text-area">
        <span className="taskName">{task.todo}</span>
        <span className="taskSpecialty"><strong>{task.specialty}</strong></span>
      </div>
      <div className="btn-area">
        <Button outline color="success">Готово</Button>
        <Button outline color="danger">Удалить</Button>
        <Button outline color="info">Отложить</Button>
      </div>
    </ListGroupItem>
  ));

  return (
    <div className="ActiveTasks">
      <ListGroup>
        {listOfTodos}
      </ListGroup>
    </div>
  );
};

export default ActiveTasks;
