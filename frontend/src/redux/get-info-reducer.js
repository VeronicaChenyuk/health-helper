const { GET_METHODICS_USER } = require('./action-types');

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
    default:
      return state;
  }
};
