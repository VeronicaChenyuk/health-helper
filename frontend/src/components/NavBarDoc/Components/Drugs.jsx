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
    this.setState((prevState) => ({drugsCount: prevState.drugsCount + 1 }));
  }

  deleteDrugClick() {
    this.setState((prevState) => ({drugsCount: prevState.drugsCount - 1 }));
  }

  render() {
    const addDrugs = [];
    for (let i = 0; i < this.state.drugsCount; i += 1) {
      addDrugs.push(<DrugsFields idx={i} />);
    }

    const addDrugsFin = addDrugs.map((el) => (
      <>
        {el}
      </>
    ));


    return (
      <>
        {addDrugsFin}
        <Button color="secondary" onClick={this.addDrugClick.bind(this)}>Добавить строку</Button>
        <Button color="link" onClick={this.deleteDrugClick.bind(this)}>Убрать строку</Button>
      </>
    );
  }
}

export default Drugs;
