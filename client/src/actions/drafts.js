import axios from 'axios';
import {
  SORT_DRAFTS,
  ADD_DRAFT,
  FETCH_DRAFTS,
  EDIT_DRAFT,
  CHANGE_DRAFT,
  DELETE_DRAFT,
  SHOW_DRAFT_LOADER,
  SET_DRAFT_ID,
  FETCH_DRAFTS_LOADER
} from './types';

export const fetchDrafts = () => {
  return async dispatch => {
    dispatch({type: FETCH_DRAFTS_LOADER});
    const res = await axios.get('/api/drafts');
    dispatch({type: FETCH_DRAFTS, payload: res.data});
  };
};

export const addDraft = (draft) => {
  return async dispatch => {
    dispatch({type: SHOW_DRAFT_LOADER});
    await axios.post('/api/drafts',draft);
    dispatch({type: ADD_DRAFT,payload: draft});
  }
};

export const deleteDraft = id => {
  return async dispatch => {
    dispatch({type: DELETE_DRAFT, payload: id});
    await axios.delete(`/api/drafts/${id}`);
  }
};

export const sortDrafts = type => {
  return {
    type: SORT_DRAFTS,
    payload: type
  }
};

export const editDraft = id => {
  return {
    type: EDIT_DRAFT,
    payload: id
  }
};

export const changeDraft = (id,values) => {
  return async dispatch => {
    dispatch({type: SHOW_DRAFT_LOADER});
    await axios.post(`/api/drafts/${id}`,values);
    dispatch({type: CHANGE_DRAFT,payload: {
      id,
      values
    }})
  }
};

export const setDraftId = () => {
  const id = Math.random() * 10;
  return {type: SET_DRAFT_ID, payload: id};
};