const { LOG_IN, LOG_OUT, CHANGE_INFO_USER } = require('./action-types');

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
    case CHANGE_INFO_USER:
      return {
        ...state,
        user,
      };
    default:
      return state;
  }
};
