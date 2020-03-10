import React from 'react';
import {
  Card, CardImg, CardTitle, CardText, CardDeck, CardBody,
} from 'reactstrap';
import { connect } from 'react-redux';
import PatientModalReport from './PatientModalReport';
import PatientModalChat from './PatientModalChat';
import PatientModalChangeMethod from './PatientModalChangeMethod';



function PatientInfoDoc(props) {
  console.log('PROOOOOOOPPPPPPPPPPPPPPS', props);

  return (
    <>
      <CardDeck>
        <Card>
          <CardImg top width="100%" src="https://cdn.onlinewebfonts.com/svg/img_370832.png" alt="Show Report" />
          <CardBody>
            <CardTitle>Ход лечения</CardTitle>
            <CardText />
            <PatientModalReport />
          </CardBody>
        </Card>
        <Card>
          <CardImg top width="80%" src="https://cdn3.iconfinder.com/data/icons/audio-icons-3/377/Repeat_Arrow-512.png" alt="Change action" />
          <CardBody>
            <CardTitle>Методика лечения</CardTitle>
            <CardText />
            <PatientModalChangeMethod />
          </CardBody>
        </Card>
        <Card style={{ marginLeft: '5px' }}>
          <CardImg top width="100%" src="https://user-images.githubusercontent.com/22866157/40578885-e3bf4e8e-6139-11e8-8be4-92fc3149f6f0.jpg" alt="Support" />
          <CardBody>
            <CardTitle>Связаться с пациентом</CardTitle>
            <CardText />
            <PatientModalChat />
          </CardBody>
        </Card>
      </CardDeck>

    </>
  );
}


// export default PatientInfoDoc;


const mapStateToProps = (state) => ({
  methodics: state.getInfo.methodics,
});

export default connect(
  mapStateToProps,
)(PatientInfoDoc);
