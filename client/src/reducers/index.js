import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import picReducer from './picReducer';

export default combineReducers({
  auth: authReducer,
  pic: picReducer,
  form: reduxForm
});
