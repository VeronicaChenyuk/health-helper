const {
  LOG_IN, LOG_OUT,
} = require('./action-types');

// Action creators
export const isLogined = (userName, statusUser) => ({
  type: LOG_IN,
  userName,
  statusUser,
});

export const isLogout = () => ({
  type: LOG_OUT,
});


// module.exports = {
//   isLogined,
//   isLogout,
//   addTodo,
// };
