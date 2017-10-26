import axios from 'axios';
import { FETCH_USER } from './types';

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
  const res = await axios.post('/api/items', values);
  //console.log(res);
  history.push('/');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitPicture = (formData, config) => async dispatch => {
  const res = await axios.post('/api/photo', formData, config);
  console.log(res);
  dispatch({ type: FETCH_USER, payload: res.data });
};
