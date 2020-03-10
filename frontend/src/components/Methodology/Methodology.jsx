import React from 'react';
import './Methodology.css';
import { connect } from 'react-redux';

function Methodology(props) {
  const { methodics } = props;
  console.log('TODODODODODO', methodics);
  return (
    <div className="Methodology">
      {
<<<<<<< HEAD
      methodics.map((meth) => {
        const {
          drugs, theraphies, analisis, patientReports, comment, nextVisit, doctorEmail, _id, doctorName, specialist,
        } = meth;
        return (
          <div className="block" key={_id}>
            <td className="leftcol">
              <img
                src="https://www.geraci.ru/wp-content/uploads/2018/11/Mirzojan-Ekaterina-Sergeevna-Vrach-ultrazvukovoj-diagnostiki-min.png"
                width="180"
                height="250"
                alt="Doctor"
              />
            </td>
=======
        methodics.map((meth) => (
          <div className="block">
>>>>>>> simle-visial
            <td>
              <p>
                <ul className="list-group">
                  <li className="list-group-item list-group-item-primary">
<<<<<<< HEAD
                    <strong>{doctorName}</strong>
                    <p>
                      <strong>
                        Специальность:
                        {' '}
                        {specialist}
                      </strong>
                    </p>
                  </li>
                  {
                  (drugs).map((drug, index) => (
                    <li className="list-group-item" key={drug.nameOfDrug}>
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
                  (theraphies).map((therap, index) => (
                    <li className="list-group-item" key={therap.nameOfTheraphy}>
                      Процедура
=======
                    <strong>{meth.doctorEmail}</strong>
                    <p><strong>Специальность: Офтальмолог</strong></p>
                  </li>
                  {
                    (meth.drugs).map((drug, index) => (
                      <li className="list-group-item">
                        Лекарство
>>>>>>> simle-visial
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
<<<<<<< HEAD
                      {therap.duration}
                    </li>
                  ))
                }
                  {
                  (analisis).map((analis, index) => (
                    <li className="list-group-item" key={analis}>
                      Анализ
                      {' '}
                      {index + 1}
                      :
                      {' '}
                      {analis}
                    </li>
                  ))
                }
                  <li className="list-group-item">
                    Следующий прием врача:
                    {' '}
                    {nextVisit}
                  </li>
                  <li className="list-group-item">
                    Форма отчетности:
                    {
                  (patientReports).map((report, index) => (
                    <span key={report}>
                      <br />
                      {index + 1}
                      {'. '}
                      {report}
                    </span>
                  ))
                }
                  </li>
                  <li className="list-group-item">
                    Комментарий от врача:
                    {' '}
                    {comment}
=======
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
>>>>>>> simle-visial
                  </li>
                </ul>
              </p>
            </td>
          </div>
<<<<<<< HEAD
        );
      })
    }
=======
        ))
      }
>>>>>>> simle-visial
    </div>
  );
}

const mapStateToProps = (state) => ({
  methodics: state.getInfo.methodics,
});

export default connect(
  mapStateToProps,
)(Methodology);
