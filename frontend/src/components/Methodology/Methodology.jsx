import React from 'react';
import './Methodology.css';
import { connect } from 'react-redux';

function Methodology(props) {
  const { methodics } = props;
  console.log('TODODODODODO', methodics);

  return (
    <div className="Methodology">
      {
      methodics.map((meth) => (
        <div className="block">
          <td className="leftcol">
            <img
              src="https://www.geraci.ru/wp-content/uploads/2018/11/Mirzojan-Ekaterina-Sergeevna-Vrach-ultrazvukovoj-diagnostiki-min.png"
              width="180"
              height="250"
              alt="Doctor"
            />
          </td>
          <td>
            <p>
              <ul className="list-group">
                <li className="list-group-item list-group-item-primary">
                  <strong>{meth.doctorEmail}</strong>
                  <p><strong>Специальность: Офтальмолог</strong></p>
                </li>
                {
                  (meth.drugs).map((drug, index) => (
                    <li className="list-group-item">
                      Лекарство
                      {' '}
                      {index + 1}
                      :
                      {' '}
                      {drug.nameOfDrug}
                      {' принимать по '}
                      {drug.dosage}
                      {' '}
                      {drug.frequency}
                      {' '}
                      {drug.beforeAfterEat}
                      {' '}
                      {drug.duration}
                    </li>
                  ))
                }
                {
                  (meth.theraphies).map((therap, index) => (
                    <li className="list-group-item">
                      Процедура
                      {' '}
                      {index + 1}
                      :
                      {' '}
                      {therap.nameOfTheraphy}
                      {' '}
                      {therap.frequency}
                      {' '}
                      {therap.duration}
                    </li>
                  ))
                }
                <li className="list-group-item">
                  Следующий прием врача:
                  {' '}
                  {meth.nextVisit}
                </li>
                <li className="list-group-item">
                  Форма отчетности:
                  {
                  (meth.patientReports).map((report, index) => (
                    <>
                      <br />
                      {index + 1}
                      {'. '}
                      {report}
                    </>
                  ))
                }
                </li>
              </ul>
            </p>
          </td>
        </div>
      ))
    }
    </div>
  );
}

const mapStateToProps = (state) => ({
  methodics: state.getInfo.methodics,
});

export default connect(
  mapStateToProps,
)(Methodology);
