import React, { useState } from 'react';
import {
  Col, Row, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText,
} from 'reactstrap';
import AddTheraphy from '../AddComponents/AddTheraphy.jsx';

class Theraphy extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      theraphyCount: 1,
    };
  }

  addTheraphyClick() {
    this.setState({ theraphyCount: this.state.theraphyCount + 1 });
  }
  deleteTheraphyClick() {
    this.setState({ theraphyCount: this.state.theraphyCount - 1 });
  }

  render() {
    const addTheraphy = [];
    for (let i = 0; i < this.state.theraphyCount; i++) {
      addTheraphy.push(<AddTheraphy />);
    }

    const addTheraphyFin = addTheraphy.map((el) => (
      <>
        {el}
      </>
    ));

    return (
      <>
        {addTheraphyFin}
        <Button color="secondary" onClick={this.addTheraphyClick.bind(this)}>Add Theraphy</Button>
        <Button color="link" onClick={this.deleteTheraphyClick.bind(this)}>Delete Theraphy</Button>
      </>
    );
  }
}

export default Theraphy;
