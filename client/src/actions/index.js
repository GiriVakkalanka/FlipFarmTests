import axios from 'axios';
import {
  FETCH_USER,
  FETCH_PIC,
  FETCH_ITEMS,
  LOAD_ITEM,
  FETCH_USER_ITEMS,
  MAKE_OFFER,
  FETCH_RECEIVED_OFFERS,
  ACCEPT_OFFER
} from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = token => async dispatch => {
  const res = await axios.post('/api/stripe', token);

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitSurvey = (values, history) => async dispatch => {
  const res = await axios.post('/api/surveys', values);

  history.push('/surveys');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitItem = (values, history) => async dispatch => {
  //console.log(values);
  //const valuesWithUrl = {name: values.name, description: values.description, }
  const res = await axios.post('/api/items', values);
  //console.log(res);
  history.push('/');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitPicture = (formData, config) => async dispatch => {
  const res = await axios.post('/api/photo', formData, config);
  //console.log(res);
  dispatch({ type: FETCH_PIC, payload: res.data });
};

export const fetchAllItems = () => async dispatch => {
  const res = await axios.get('/api/get_all_items');
  //console.log(res.data);
  dispatch({ type: FETCH_ITEMS, payload: res.data });
};

export const fetchUserItems = () => async dispatch => {
  //console.log('action creator called');
  const res = await axios.get('/api/get_user_items');
  //console.log(res);

  dispatch({ type: FETCH_USER_ITEMS, payload: res.data });
};

export const loadItem = itemID => {
  //console.log('loaditem action ran');
  //console.log(itemID);
  return { type: LOAD_ITEM, payload: itemID };
};

export const fetchReceivedOffers = () => async dispatch => {
  const res = await axios.get('/api/user_received_offers');
  dispatch({ type: FETCH_RECEIVED_OFFERS, payload: res.data });
};

export const makeOffer = offer => async dispatch => {
  //console.log('action creator called');
  console.log(offer);
  const res = await axios.post('/api/make_offer', offer);
  //console.log(res);
  dispatch({ type: MAKE_OFFER, payload: res.data });
};

export const acceptOffer = offer => async dispatch => {
  //console.log(offer);
  const res = await axios.post('/api/accept_offer', offer);
  dispatch({ type: ACCEPT_OFFER, payload: res.data });
};
