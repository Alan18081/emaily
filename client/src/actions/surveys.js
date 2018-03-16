import axios from 'axios';
import {
  FETCH_USER,
  FETCH_SURVEYS,
  DELETE_SURVEY,
  SORT_SURVEYS,
  SHOW_DRAFT_LOADER,
  FETCH_SURVEYS_LOADER
} from './types';

export const submitSurvey = (values,history) => {
  return async dispatch => {
    dispatch({type: SHOW_DRAFT_LOADER});
    const res = await axios.post('/api/surveys',values);
    history.push('/surveys');
    dispatch({type: FETCH_USER, payload: res.data});
  };
};

export const fetchSurveys = () => {
  return async dispatch => {
    dispatch({type: FETCH_SURVEYS_LOADER});
    const res = await axios.get('/api/surveys');
    dispatch({type: FETCH_SURVEYS, payload: res.data});
  };
};

export const deleteSurvey = id => {
  return async dispatch => {
    dispatch({type: DELETE_SURVEY, payload: id});
    const res = await axios.delete(`/api/surveys/${id}`);
    dispatch({type: FETCH_USER, payload: res.data})
  }
};

export const sortSurveys = type => {
  return {
    type: SORT_SURVEYS,
    payload: type
  }
};