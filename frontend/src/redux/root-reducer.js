import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import loginReducer from './login-reducer';
import switchFormReducer from './switch-form-reducer';
import patientDataReducer from './patient-data-reducer';


// Root reducer
export default combineReducers({
  logIn: loginReducer,
  switchFormReducer,
  form: formReducer,
  patientDataReducer,
});
