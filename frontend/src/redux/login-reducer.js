const { LOG_IN, LOG_OUT } = require('./action-types');

const initialState = {
  auth: false,
  userName: '',
  regForm: true,
  statusUser: '',
};

// Reducer
module.exports = (state = initialState, action) => {
  const { userName, statusUser } = action;
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        auth: !state.auth,
        userName,
        statusUser,
      };
    case LOG_OUT:
      return {
        auth: !state.auth,
      };
    default:
      return state;
  }
};
