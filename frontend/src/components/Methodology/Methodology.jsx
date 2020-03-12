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
            <td>
              <p>
                <ul className="list-group">
                  <li className="list-group-item list-group-item-primary">
                   {doctorName}
                    <p>
                      <strong>
                        Специальность:
                        {' '}
                        {specialist}
                      </strong>
                    </p>
                  </li>
                  <li className="list-group-item">
                    <strong>Лекарства:</strong>
                    {
                      (drugs).map((drug, index) => (
                        <li className="list-group-item" key={drug.nameOfDrug}>
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
                  <li className="list-group-item">
                    <strong>Процедуры:</strong>
                    {
                      (theraphies).map((therap, index) => (
                        <li className="list-group-item" key={therap}>
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
                  <li className="list-group-item">
                    <strong>Анализы:</strong>
                    {
                      (analisis).map((analis, index) => (
                        <li className="list-group-item" key={analis}>
                          {' '}
                          {index + 1}
                          :
                          {' '}
                          {analis}
                        </li>
                      ))
                    }
                  </li>
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
                    <strong>Комментарий от врача:</strong>
                    {' '}
                    {comment}
                  </li>
                </ul>
              </p>
            </td>
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
