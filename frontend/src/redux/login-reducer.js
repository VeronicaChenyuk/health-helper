const { LOG_IN, LOG_OUT } = require('./action-types');

const initialState = {
  auth: false,
  user: '',
  regForm: true,
};

// Reducer
module.exports = (state = initialState, action) => {
  const { user } = action;
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        auth: !state.auth,
        user,
      };
    case LOG_OUT:
      return {
        auth: !state.auth,
      };
    default:
      return state;
  }
};
