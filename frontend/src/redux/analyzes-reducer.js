const { ANALYZES_DATA } = require('./action-types');

const initialState = [];

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case ANALYZES_DATA:
      return [
        ...state,
        action.payload,
      ];
    default:
      return state;
  }
};
