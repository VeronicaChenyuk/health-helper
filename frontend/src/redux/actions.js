const {
  LOG_IN, LOG_OUT, IS_LOGIN_FORM,
} = require('./action-types');

// Action creators
export const isLogined = (userName, statusUser, email) => ({
  type: LOG_IN,
  userName,
  statusUser,
  email,
});

export const isLogout = () => ({
  type: LOG_OUT,
});

export const isLoginForm = () => ({
  type: IS_LOGIN_FORM,
});
