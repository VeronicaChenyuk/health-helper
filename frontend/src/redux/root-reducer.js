import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import loginReducer from './login-reducer';
import switchFormReducer from './switch-form-reducer';
import getInfo from './get-info-reducer';


// Root reducer
export default combineReducers({
  logIn: loginReducer,
  switchFormReducer,
  getInfo,
  form: formReducer,
});
