const { LOG_IN, LOG_OUT } = require('./action-types');

const initialState = {
  auth: false,
  regForm: true,
};

// Reducer
module.exports = (state = initialState, action) => {
  const { userName } = action;
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        auth: !state.auth,
        userName,
      };
    case LOG_OUT:
      return {
        auth: !state.auth,
      };
    default:
      return state;
  }
};
