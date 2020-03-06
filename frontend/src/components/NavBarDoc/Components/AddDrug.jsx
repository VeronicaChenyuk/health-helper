import React, { useState } from 'react';
import {
  Col, Row, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText,
} from 'reactstrap';
import AddDrug from '../AddComponents/AddDrug.jsx';

class Drugs extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      drugsCount: 1,
    };
  }

  addDrugClick() {
    this.setState({ drugsCount: this.state.drugsCount + 1 });
  }
  deleteDrugClick() {
    this.setState({ drugsCount: this.state.drugsCount - 1 });
  }

  render() {
    const addDrugs = [];
    for (let i = 0; i < this.state.drugsCount; i++) {
      addDrugs.push(<AddDrug />);
    }

    const addDrugsFin = addDrugs.map((el) => (
      <>
        {el}
      </>
    ));


    return (
      <>
        {addDrugsFin}
        <Button color="secondary" onClick={this.addDrugClick.bind(this)}>Add Drug</Button>
        <Button color="link" onClick={this.deleteDrugClick.bind(this)}>Delete Drug</Button>
      </>
    );
  }
}

export default Drugs;
