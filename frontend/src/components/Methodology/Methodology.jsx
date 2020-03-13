import React from 'react';
import './Methodology.css';
import { connect } from 'react-redux';

function Methodology(props) {
  const { methodics } = props;
  return (
    <div className="Methodology">
      {
      methodics.map((meth) => {
        const {
          drugs, theraphies, analisis, patientReports, comment, nextVisit, _id, doctorName, specialist,
        } = meth;
        return (
          <div className="block" key={_id}>
            <p>
              <ul className="list-group card-meth">
                <li className="list-group-item list-group-item-primary list-header">
                  {doctorName}
                  <p>
                    <strong>
                      Специальность:
                      {' '}
                      {specialist}
                    </strong>
                  </p>
                </li>
                <li className="not-header">
                  <strong>Лекарства:</strong>
                  {
                      (drugs).map((drug, index) => (
                        <li key={drug.nameOfDrug}>
                          {index + 1}
                          {'. '}
                          {drug.nameOfDrug}
                          :
                          {' '}
                          {
                            drug.dosage
                            && (
                              <>
                                {' '}
                                {drug.dosage}
                                {' мг.'}
                              </>
                            )
                          }
                          {
                            drug.frequency
                            && (
                              <>
                                {' принимать '}
                                {drug.frequency}
                                {' раз(а) в день '}
                              </>
                            )
                          }
                          {drug.beforeAfterEat}
                          {' еды '}
                          {drug.duration}
                          {' дней'}
                        </li>
                      ))
                    }
                </li>
                <li className="not-header">
                  <strong>Процедуры:</strong>
                  {
                      (theraphies).map((therap, index) => (
                        <li key={therap}>
                          {index + 1}
                          {'. '}
                          {therap.nameOfTheraphy}
                          :
                          {
                            therap.frequency && (
                              <>
                                {' проводить '}
                                {therap.frequency}
                                {' раз(а) в неделю. '}
                              </>
                            )
                          }
                          {
                            therap.duration && (
                              <>
                                {therap.duration}
                                {' cеансов'}
                                {'. '}
                              </>
                            )
                          }
                        </li>
                      ))
                    }
                </li>
                <li className="not-header">
                  <strong>Анализы:</strong>
                  {
                      (analisis).map((analis, index) => (
                        <li key={analis}>
                          {' '}
                          {index + 1}
                          :
                          {' '}
                          {analis}
                        </li>
                      ))
                    }
                </li>
                <li className="not-header">
                  Следующий прием врача:
                  {' '}
                  {nextVisit}
                </li>
                <li className="not-header">
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
                <li className="not-header">
                  <strong>Комментарий от врача:</strong>
                  {' '}
                  {comment}
                </li>
              </ul>
            </p>
          </div>
        );
      })
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
