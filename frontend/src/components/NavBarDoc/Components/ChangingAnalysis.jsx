import React from 'react';
import {
  Button,
} from 'reactstrap';
import { connect } from 'react-redux';
import AnalysisFields from '../AddComponents/AddAnalysis';

function indexMethod(email, methodics) {
  for (let i = 0; i < methodics.length; i++) {
    if (methodics[i].patientEmail === email) { return i; }
  }
}

class ChangingAnalysis extends React.Component {
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
    const analysisCount = indexMethod(this.props.currentPatientEmail, this.props.methodics);
    const { length } = this.props.methodics[analysisCount].analisis;
    for (let i = 0; i < this.state.analysisCount + length - 1; i++) {
      addAnalysis.push(<AnalysisFields idx={i} />);
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


const mapStateToProps = (state) => ({
  email: state.logIn.user.email,
  methodics: state.getInfo.methodics,
  currentPatientEmail: state.switchFormReducer.currentPatientEmail,
});

export default connect(mapStateToProps)(ChangingAnalysis);

