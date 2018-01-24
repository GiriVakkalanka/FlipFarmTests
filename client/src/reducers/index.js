import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import picReducer from './picReducer';
import itemsReducer from './itemsReducer';
import userItemsReducer from './userItemsReducer';
import loadedItemReducer from './loadedItemReducer';
import offersMadeReducer from './offersMadeReducer';
import offersReceivedReducer from './offersReceivedReducer';
import offersAcceptedReducer from './offersAcceptedReducer';
import offersSentReducer from './offersSentReducer';

export default combineReducers({
  auth: authReducer,
  pic: picReducer,
  form: reduxForm,
  items: itemsReducer,
  userItems: userItemsReducer,
  loadedItem: loadedItemReducer,
  offersMade: offersMadeReducer,
  offersReceived: offersReceivedReducer,
  offersAccepted: offersAcceptedReducer,
  offersSent: offersSentReducer
});
