import React from 'react';
import {
  Button,
} from 'reactstrap';
import ChangedDrugsFields from '../AddComponents/ChangedDrug';

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
    for (let i = 0; i < this.state.drugsCount; i += 1) {
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
        <Button color="secondary" onClick={this.addDrugClick.bind(this)}>Add Drug</Button>
        <Button color="link" onClick={this.deleteDrugClick.bind(this)}>Delete Drug</Button>
      </>
    );
  }
}


// const mapStateToProps = (state) => ({
//   email: state.logIn.user.email,
//   methodics: state.getInfo.methodics,
//   initialValues: state.getInfo.methodics[indexMethod(state.switchFormReducer.currentPatientEmail, state.getInfo.methodics)],


//  //indexMethod(state.switchFormReducer.currentPatientEmail, state.getInfo.methodics) 

//   currentPatientEmail: state.switchFormReducer.currentPatientEmail,
// });

// const MethodFormChange = reduxForm({
//   form: 'method',
// })(MainMethodFormChange);

// // export default MethodForm;
// export default connect(mapStateToProps)(MethodFormChange);
export default ChangingDrugs;
