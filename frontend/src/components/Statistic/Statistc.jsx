import React from 'react';
import './Statistic.css';
import { connect } from 'react-redux';
import { isLoginForm } from '../../redux/actions';


const Statistic = (props) => {
  console.log(props.methodics, 'UUUUUUUUUUUUUUUFFFFFFF');
  
  return (
    <>
      <div className="statistic-circles">
        <div className="group-circles">
          <div className="group-circle-item">
            <div className="circle circle-one" />
            <div className="circle-description">
              <span className="circle-numbers">3,150</span>
              <span className="circle-concept">applicants</span>
            </div>
          </div>
          <div className="group-circle-item">
            <div className="circle circle-two" />
            <div className="circle-description">
              <span className="circle-numbers">1,546</span>
              <span className="circle-concept">interviews</span>
            </div>
          </div>
          <div className="group-circle-item">
            <div className="circle circle-three" />
            <div className="circle-description">
              <span className="circle-numbers">912</span>
              <span className="circle-concept">fordwards</span>
            </div>
          </div>
        </div>
        <h3 className="rounded">
          <span className="totals-concept">totals</span>
          <span className="totals-results">Out of 5,231 views</span>
        </h3>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  isRegForm: state.switchFormReducer.isRegForm,
  methodics: state.getInfo.methodics,
});

const mapDispatchToProps = (dispatch) => ({
  isLoginForm: () => dispatch(isLoginForm()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Statistic);
