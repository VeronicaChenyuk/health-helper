import React from 'react';
import './Account.css';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';

const Account = () => {



  return (
    <div className="Account">
      <ListGroup>
        <ListGroupItem className="account-info-list">Какая-то инфа 1</ListGroupItem>
        <ListGroupItem className="account-info-list">Какая-то инфа 2</ListGroupItem>
        <ListGroupItem className="account-info-list">Какая-то инфа 3</ListGroupItem>
      </ListGroup>
    </div>
  );
};

export default Account;
