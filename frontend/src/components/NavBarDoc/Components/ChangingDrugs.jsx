import React from 'react';
import {
  Button,
} from 'reactstrap';
import { connect } from 'react-redux';
import ChangedDrugsFields from '../AddComponents/ChangedDrug';

function indexMethod(email, methodics) {
  for (let i = 0; i < methodics.length; i++) {
    if (methodics[i].patientEmail === email) { return i; }
  }
}
class ChangingDrugs extends React.Component {
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
    const drugsCount = indexMethod(this.props.currentPatientEmail, this.props.methodics);
    const { length } = this.props.methodics[drugsCount].drugs;
    for (let i = 0; i < this.state.drugsCount + length - 1; i += 1) {
      addDrugs.push(<ChangedDrugsFields idx={i} />);
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

const mapStateToProps = (state) => ({
  email: state.logIn.user.email,
  methodics: state.getInfo.methodics,
  currentPatientEmail: state.switchFormReducer.currentPatientEmail,
});

export default connect(mapStateToProps)(ChangingDrugs);

