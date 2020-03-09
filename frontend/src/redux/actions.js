const {
  LOG_IN, LOG_OUT, IS_LOGIN_FORM, PATIENT_DATA
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

export const isLoginForm = () => ({
  type: IS_LOGIN_FORM,
});

export const isPatientData = (patient) => ({
  type: PATIENT_DATA,
  patient,
});
