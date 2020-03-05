import { combineReducers } from 'redux';
import loginReducer from './login-reducer';
import switchFormReducer from './switch-form-reducer';

// Root reducer
export default combineReducers({
  logIn: loginReducer,
  switchFormReducer,
});
