const { IS_LOGIN_FORM } = require('./action-types');

const initialState = {
  isRegForm: true,
};

// Reducer
module.exports = (state = initialState, action) => {
  console.log("STATE", state);
  console.log("ACTION", action);

  switch (action.type) {
    case IS_LOGIN_FORM:
      return {
        ...state,
        isRegForm: !state.isRegForm,
      };
    default:
      return state;
  }
};
