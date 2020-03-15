import React from 'react';
import {
  Button,
} from 'reactstrap';
import AnalysisFields from '../AddComponents/AddAnalysis';


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
    for (let i = 0; i < this.state.analysisCount; i += 1) {
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
        <Button color="secondary" onClick={this.addAnalysisClick.bind(this)}>Добавить строку</Button>
        <Button color="link" onClick={this.deleteAnalysisClick.bind(this)}>Убрать строку</Button>
      </>
    );
  }
}

export default Analysis;
