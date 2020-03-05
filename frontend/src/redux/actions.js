const {
  LOG_IN, LOG_OUT,
} = require('./action-types');

// Action creators
export const isLogined = (userName) => ({
  type: LOG_IN,
  userName,
});

export const isLogout = () => ({
  type: LOG_OUT,
});


// module.exports = {
//   isLogined,
//   isLogout,
//   addTodo,
// };
