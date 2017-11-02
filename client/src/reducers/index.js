import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import picReducer from './picReducer';
import itemsReducer from './itemsReducer';
import loadedItemReducer from './loadedItemReducer';

export default combineReducers({
  auth: authReducer,
  pic: picReducer,
  form: reduxForm,
  items: itemsReducer,
  loadedItem: loadedItemReducer
});
