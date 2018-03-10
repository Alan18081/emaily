import axios from 'axios';
import * as types from './types';

export const fetchUser = () => {
  return async dispatch => {
    const res = await axios.get('/api/current_user');
    dispatch({type: types.FETCH_USER, payload:res.data});
  }
};

export const handleToken = (token) => {
  return async dispatch => {
    const res = await axios.post('/api/stripe',token);
    dispatch({type: types.FETCH_USER, payload: res.data});
  }
};