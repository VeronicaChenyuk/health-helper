import React, { useState } from 'react';
import {
  Col, Row, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText,
} from 'reactstrap';
import AddAnalysis from '../AddComponents/AddAnalysis.jsx';

class Analysis extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      analysisCount: 1,
    };
  }

  addAnalysisClick() {
    this.setState({ analysisCount: this.state.analysisCount + 1 });
  }
  deleteAnalysisClick() {
    this.setState({ analysisCount: this.state.analysisCount - 1 });
  }

  render() {
    const addAnalysis = [];
    for (let i = 0; i < this.state.analysisCount; i++) {
      addAnalysis.push(<AddAnalysis />);
    }

    const addAnalysisFin = addAnalysis.map((el) => (
      <>
        {el}
      </>
    ));

    return (
      <>
        {addAnalysisFin}
        <Button color="secondary" onClick={this.addAnalysisClick.bind(this)}>Add Analysis</Button>
        <Button color="link" onClick={this.deleteAnalysisClick.bind(this)}>Delete Analysis</Button>
      </>
    );
  }
}

export default Analysis;
