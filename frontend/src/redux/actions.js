const {
  LOG_IN, LOG_OUT, IS_LOGIN_FORM, CHANGE_INFO_USER,

} = require('./action-types');

// Action creators
export const isLogined = (user) => ({
  type: LOG_IN,
  user,
});
export const isLogout = () => ({
  type: LOG_OUT,
});
export const isLoginForm = () => ({
  type: IS_LOGIN_FORM,
});
export const changeInfoUser = (user) => ({
  type: CHANGE_INFO_USER,
  user,
});
