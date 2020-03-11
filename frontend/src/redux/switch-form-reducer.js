const { IS_LOGIN_FORM, SWITCH_CURRENT_EMAIL } = require('./action-types');

const initialState = {
  isRegForm: true,
  currentPatientEmail: 'test',
};

// Reducer
module.exports = (state = initialState, action) => {
  const { currentPatientEmail } = action;
  switch (action.type) {
    case IS_LOGIN_FORM:
      return {
        ...state,
        isRegForm: !state.isRegForm,
      };
    case SWITCH_CURRENT_EMAIL:
      return {
        ...state,
        currentPatientEmail,
      };
    default:
      return state;
  }
};
