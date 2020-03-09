const { PATIENT_DATA } = require('./action-types');

const initialState = {
  isPatientData: {},
};

// Reducer
export default (state = initialState, action) => {
  const { patient } = action;
  switch (action.type) {
    case PATIENT_DATA:
      return {
        ...state,
        isPatientData: patient,
      };
    default:
      return state;
  }
};
