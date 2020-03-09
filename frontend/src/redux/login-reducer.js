const { LOG_IN, LOG_OUT } = require('./action-types');

const initialState = {
  auth: false,
  userName: '',
  regForm: true,
  statusUser: '',
  email: '',
};

// Reducer
module.exports = (state = initialState, action) => {
  const { userName, statusUser, email } = action;
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        auth: !state.auth,
        userName,
        statusUser,
        email,
      };
    case LOG_OUT:
      return {
        auth: !state.auth,
      };
    default:
      return state;
  }
};
