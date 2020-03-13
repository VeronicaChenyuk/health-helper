import React from 'react';
import {
  Button,
} from 'reactstrap';
import { connect } from 'react-redux';
import TheraphiesFields from '../AddComponents/AddTheraphy';

function indexMethod(email, methodics) {
  for (let i = 0; i < methodics.length; i++) {
    if (methodics[i].patientEmail === email) { return i; }
  }
}

class ChangingTheraphy extends React.Component {
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
    const theraphyCount = indexMethod(this.props.currentPatientEmail, this.props.methodics);
    const { length } = this.props.methodics[theraphyCount].theraphies;

    for (let i = 0; i < this.state.theraphyCount + length - 1; i += 1) {
      addTheraphy.push(<TheraphiesFields idx={i} />);
    }

    const addTheraphyFin = addTheraphy.map((el) => (
      <>
        {el}
      </>
    ));

    return (
      <>
        {addTheraphyFin}
        <Button color="secondary" onClick={this.addTheraphyClick.bind(this)}>Добавить строку</Button>
        <Button color="link" onClick={this.deleteTheraphyClick.bind(this)}>Убрать строку</Button>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.logIn.user.email,
  methodics: state.getInfo.methodics,
  currentPatientEmail: state.switchFormReducer.currentPatientEmail,
});

export default connect(mapStateToProps)(ChangingTheraphy);
