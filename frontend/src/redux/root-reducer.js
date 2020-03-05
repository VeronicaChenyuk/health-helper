import { combineReducers } from 'redux';
import loginReducer from './login-reducer';

// Root reducer
export default combineReducers({
  logIn: loginReducer,
});
