const { GET_METHODICS_USER, SWITCH_STATUS_TASK } = require('./action-types');

const initialState = {
  methodics: [],
};

module.exports = (state = initialState, action) => {
  const { methodics } = action;
  switch (action.type) {
    case GET_METHODICS_USER:
      return {
        ...state,
        methodics,
      };
    case SWITCH_STATUS_TASK: {
      return {
        ...state,
        methodics,
      };
    }
    default:
      return state;
  }
};
