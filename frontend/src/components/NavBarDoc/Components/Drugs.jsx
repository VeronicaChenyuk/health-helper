import React from 'react';
import {
  Button,
} from 'reactstrap';
import DrugsFields from '../AddComponents/AddDrug';

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
    for (let i = 0; i < this.state.drugsCount; i += 1) {
      addDrugs.push(<DrugsFields idx={i} />);
      // addDrugs.push(<AddDrug />);
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
